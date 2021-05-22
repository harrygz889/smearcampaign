import { ChangeEvent } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

import '@reach/combobox/styles.css';
import styled from 'styled-components';

const AppStyles = styled.div`
  .App {
    font-family: 'Roboto', sans-serif;

    h1 {
      font-family: 'Bungee Shade', cursive;
    }

    padding: 2rem 1rem;
    text-align: center;
  }

  .title {
    margin: 0 0 0.75rem;
    font-size: 2.25rem;
  }

  .subtitle {
    margin: 0 0 2.5rem;
    font-size: 1.25rem;
  }

  .logo {
    text-align: right;
    padding: 0.25rem 0.5rem;
  }
`;

export default function App() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
  };

  const renderSuggestions = () => {
    const suggestions = data.map(({ place_id, description }) => (
      <ComboboxOption key={place_id} value={description} />
    ));

    return (
      <>
        {suggestions}
        <li className="logo">
          <img
            src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
            alt="Powered by Google"
          />
        </li>
      </>
    );
  };

  return (
    <AppStyles className="App">
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          style={{ width: 300, maxWidth: '90%' }}
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>{status === 'OK' && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </AppStyles>
  );
}
