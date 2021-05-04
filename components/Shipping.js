import { useEffect, useState } from 'react';
import DisplayError from './ErrorMessage';

export default function Shipping() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shippingData, setShippingData] = useState([]);

  useEffect(() => {
    const data = {
      rate_options: {
        carrier_ids: ['se-123890'],
      },
      shipment: {
        validate_address: 'no_validation',
        ship_to: {
          name: 'Amanda Miller',
          phone: '555-555-5555',
          address_line1: '525 S Winchester Blvd',
          city_locality: 'San Jose',
          state_province: 'CA',
          postal_code: '95128',
          country_code: 'US',
          address_residential_indicator: 'yes',
        },
        ship_from: {
          company_name: 'Example Corp.',
          name: 'John Doe',
          phone: '111-111-1111',
          address_line1: '4009 Marathon Blvd',
          address_line2: 'Suite 300',
          city_locality: 'Austin',
          state_province: 'TX',
          postal_code: '78756',
          country_code: 'US',
          address_residential_indicator: 'no',
        },
        packages: [
          {
            weight: {
              value: 1.0,
              unit: 'ounce',
            },
          },
        ],
      },
    };

    fetch('https://api.shipengine.com/v1/rates', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'API-Key': 'TEST_KP1tuSMGTBr/XPG0cpKh4YEi+cVzZhvbPdbJ+hnERdI',
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setShippingData(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setLoading(false);
          setError(error);
          console.log(error);
        }
      );
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  return <p>Shipping: {shippingData ? 'we got something' : 'not yet'}</p>;
}
