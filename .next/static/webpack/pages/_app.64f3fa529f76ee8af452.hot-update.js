webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Shipping.js":
/*!********************************!*\
  !*** ./components/Shipping.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shipping; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\n\nvar _jsxFileName = \"/Users/WorkAccount/sick-fits/frontend/components/Shipping.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Shipping() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      shippingData = _useState3[0],\n      setShippingData = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var data = {\n      rate_options: {\n        carrier_ids: ['se-123890']\n      },\n      shipment: {\n        validate_address: 'no_validation',\n        ship_to: {\n          name: 'Amanda Miller',\n          phone: '555-555-5555',\n          address_line1: '525 S Winchester Blvd',\n          city_locality: 'San Jose',\n          state_province: 'CA',\n          postal_code: '95128',\n          country_code: 'US',\n          address_residential_indicator: 'yes'\n        },\n        ship_from: {\n          company_name: 'Example Corp.',\n          name: 'John Doe',\n          phone: '111-111-1111',\n          address_line1: '4009 Marathon Blvd',\n          address_line2: 'Suite 300',\n          city_locality: 'Austin',\n          state_province: 'TX',\n          postal_code: '78756',\n          country_code: 'US',\n          address_residential_indicator: 'no'\n        },\n        packages: [{\n          weight: {\n            value: 1.0,\n            unit: 'ounce'\n          }\n        }]\n      }\n    };\n    fetch('https://api.shipengine.com/v1/rates', {\n      method: 'POST',\n      // *GET, POST, PUT, DELETE, etc\n      mode: 'cors',\n      // no-cors, *cors, same-origin\n      cache: 'no-cache',\n      // *default, no-cache, reload, force-cache, only-if-cached\n      // credentials: 'same-origin', // include, *same-origin, omit\n      headers: {\n        'API-Key': 'TEST_KP1tuSMGTBr/XPG0cpKh4YEi+cVzZhvbPdbJ+hnERdI',\n        'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',\n\n      },\n      redirect: 'follow',\n      // manual, *follow, error\n      referrerPolicy: 'no-referrer',\n      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url\n      body: JSON.stringify(data) // body data type must match \"Content-Type\" header\n\n    }).then(function (res) {\n      return res.json();\n    }).then(function (result) {\n      setLoading(false);\n      setShippingData(result);\n      console.log(result);\n    }, // Note: it's important to handle errors here\n    // instead of a catch() block so that we don't swallow\n    // exceptions from actual bugs in components.\n    function (error) {\n      setLoading(false);\n      setError(error);\n      console.log(error);\n    });\n  }, []);\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 21\n  }, this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Shipping: \", shippingData ? 'we got something' : 'not yet']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Shipping, \"NuGg5MYFnitZKqqeuzzBzhV80v8=\");\n\n_c = Shipping;\n\nvar _c;\n\n$RefreshReg$(_c, \"Shipping\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGlwcGluZy5qcz81NjI2Il0sIm5hbWVzIjpbIlNoaXBwaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzaGlwcGluZ0RhdGEiLCJzZXRTaGlwcGluZ0RhdGEiLCJ1c2VFZmZlY3QiLCJkYXRhIiwicmF0ZV9vcHRpb25zIiwiY2Fycmllcl9pZHMiLCJzaGlwbWVudCIsInZhbGlkYXRlX2FkZHJlc3MiLCJzaGlwX3RvIiwibmFtZSIsInBob25lIiwiYWRkcmVzc19saW5lMSIsImNpdHlfbG9jYWxpdHkiLCJzdGF0ZV9wcm92aW5jZSIsInBvc3RhbF9jb2RlIiwiY291bnRyeV9jb2RlIiwiYWRkcmVzc19yZXNpZGVudGlhbF9pbmRpY2F0b3IiLCJzaGlwX2Zyb20iLCJjb21wYW55X25hbWUiLCJhZGRyZXNzX2xpbmUyIiwicGFja2FnZXMiLCJ3ZWlnaHQiLCJ2YWx1ZSIsInVuaXQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsSUFBRCxDQUREO0FBQUEsTUFDMUJDLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1COztBQUFBLG1CQUVIRixzREFBUSxDQUFDLElBQUQsQ0FGTDtBQUFBLE1BRTFCRyxPQUYwQjtBQUFBLE1BRWpCQyxVQUZpQjs7QUFBQSxtQkFHT0osc0RBQVEsQ0FBQyxFQUFELENBSGY7QUFBQSxNQUcxQkssWUFIMEI7QUFBQSxNQUdaQyxlQUhZOztBQUtqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsSUFBSSxHQUFHO0FBQ1hDLGtCQUFZLEVBQUU7QUFDWkMsbUJBQVcsRUFBRSxDQUFDLFdBQUQ7QUFERCxPQURIO0FBSVhDLGNBQVEsRUFBRTtBQUNSQyx3QkFBZ0IsRUFBRSxlQURWO0FBRVJDLGVBQU8sRUFBRTtBQUNQQyxjQUFJLEVBQUUsZUFEQztBQUVQQyxlQUFLLEVBQUUsY0FGQTtBQUdQQyx1QkFBYSxFQUFFLHVCQUhSO0FBSVBDLHVCQUFhLEVBQUUsVUFKUjtBQUtQQyx3QkFBYyxFQUFFLElBTFQ7QUFNUEMscUJBQVcsRUFBRSxPQU5OO0FBT1BDLHNCQUFZLEVBQUUsSUFQUDtBQVFQQyx1Q0FBNkIsRUFBRTtBQVJ4QixTQUZEO0FBWVJDLGlCQUFTLEVBQUU7QUFDVEMsc0JBQVksRUFBRSxlQURMO0FBRVRULGNBQUksRUFBRSxVQUZHO0FBR1RDLGVBQUssRUFBRSxjQUhFO0FBSVRDLHVCQUFhLEVBQUUsb0JBSk47QUFLVFEsdUJBQWEsRUFBRSxXQUxOO0FBTVRQLHVCQUFhLEVBQUUsUUFOTjtBQU9UQyx3QkFBYyxFQUFFLElBUFA7QUFRVEMscUJBQVcsRUFBRSxPQVJKO0FBU1RDLHNCQUFZLEVBQUUsSUFUTDtBQVVUQyx1Q0FBNkIsRUFBRTtBQVZ0QixTQVpIO0FBd0JSSSxnQkFBUSxFQUFFLENBQ1I7QUFDRUMsZ0JBQU0sRUFBRTtBQUNOQyxpQkFBSyxFQUFFLEdBREQ7QUFFTkMsZ0JBQUksRUFBRTtBQUZBO0FBRFYsU0FEUTtBQXhCRjtBQUpDLEtBQWI7QUF1Q0FDLFNBQUssQ0FBQyxxQ0FBRCxFQUF3QztBQUMzQ0MsWUFBTSxFQUFFLE1BRG1DO0FBQzNCO0FBQ2hCQyxVQUFJLEVBQUUsTUFGcUM7QUFFN0I7QUFDZEMsV0FBSyxFQUFFLFVBSG9DO0FBR3hCO0FBQ25CO0FBQ0FDLGFBQU8sRUFBRTtBQUNQLG1CQUFXLGtEQURKO0FBRVAsd0JBQWdCLGtCQUZULENBR1A7O0FBSE8sT0FMa0M7QUFVM0NDLGNBQVEsRUFBRSxRQVZpQztBQVV2QjtBQUNwQkMsb0JBQWMsRUFBRSxhQVgyQjtBQVdaO0FBQy9CQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlOUIsSUFBZixDQVpxQyxDQVlmOztBQVplLEtBQXhDLENBQUwsQ0FjRytCLElBZEgsQ0FjUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQWRSLEVBZUdGLElBZkgsQ0FnQkksVUFBQ0csTUFBRCxFQUFZO0FBQ1Z0QyxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSxxQkFBZSxDQUFDb0MsTUFBRCxDQUFmO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0QsS0FwQkwsRUFxQkk7QUFDQTtBQUNBO0FBQ0EsY0FBQ3pDLEtBQUQsRUFBVztBQUNURyxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRixjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBMEMsYUFBTyxDQUFDQyxHQUFSLENBQVkzQyxLQUFaO0FBQ0QsS0E1Qkw7QUE4QkQsR0F0RVEsRUFzRU4sRUF0RU0sQ0FBVDtBQXdFQSxNQUFJRSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlGLEtBQUosRUFBVyxvQkFBTyxxRUFBQyxxREFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsc0JBQU87QUFBQSw2QkFBY0ksWUFBWSxHQUFHLGtCQUFILEdBQXdCLFNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBaEZ1Qk4sUTs7S0FBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2hpcHBpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXBwaW5nKCkge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NoaXBwaW5nRGF0YSwgc2V0U2hpcHBpbmdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICByYXRlX29wdGlvbnM6IHtcbiAgICAgICAgY2Fycmllcl9pZHM6IFsnc2UtMTIzODkwJ10sXG4gICAgICB9LFxuICAgICAgc2hpcG1lbnQ6IHtcbiAgICAgICAgdmFsaWRhdGVfYWRkcmVzczogJ25vX3ZhbGlkYXRpb24nLFxuICAgICAgICBzaGlwX3RvOiB7XG4gICAgICAgICAgbmFtZTogJ0FtYW5kYSBNaWxsZXInLFxuICAgICAgICAgIHBob25lOiAnNTU1LTU1NS01NTU1JyxcbiAgICAgICAgICBhZGRyZXNzX2xpbmUxOiAnNTI1IFMgV2luY2hlc3RlciBCbHZkJyxcbiAgICAgICAgICBjaXR5X2xvY2FsaXR5OiAnU2FuIEpvc2UnLFxuICAgICAgICAgIHN0YXRlX3Byb3ZpbmNlOiAnQ0EnLFxuICAgICAgICAgIHBvc3RhbF9jb2RlOiAnOTUxMjgnLFxuICAgICAgICAgIGNvdW50cnlfY29kZTogJ1VTJyxcbiAgICAgICAgICBhZGRyZXNzX3Jlc2lkZW50aWFsX2luZGljYXRvcjogJ3llcycsXG4gICAgICAgIH0sXG4gICAgICAgIHNoaXBfZnJvbToge1xuICAgICAgICAgIGNvbXBhbnlfbmFtZTogJ0V4YW1wbGUgQ29ycC4nLFxuICAgICAgICAgIG5hbWU6ICdKb2huIERvZScsXG4gICAgICAgICAgcGhvbmU6ICcxMTEtMTExLTExMTEnLFxuICAgICAgICAgIGFkZHJlc3NfbGluZTE6ICc0MDA5IE1hcmF0aG9uIEJsdmQnLFxuICAgICAgICAgIGFkZHJlc3NfbGluZTI6ICdTdWl0ZSAzMDAnLFxuICAgICAgICAgIGNpdHlfbG9jYWxpdHk6ICdBdXN0aW4nLFxuICAgICAgICAgIHN0YXRlX3Byb3ZpbmNlOiAnVFgnLFxuICAgICAgICAgIHBvc3RhbF9jb2RlOiAnNzg3NTYnLFxuICAgICAgICAgIGNvdW50cnlfY29kZTogJ1VTJyxcbiAgICAgICAgICBhZGRyZXNzX3Jlc2lkZW50aWFsX2luZGljYXRvcjogJ25vJyxcbiAgICAgICAgfSxcbiAgICAgICAgcGFja2FnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3ZWlnaHQ6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IDEuMCxcbiAgICAgICAgICAgICAgdW5pdDogJ291bmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGZldGNoKCdodHRwczovL2FwaS5zaGlwZW5naW5lLmNvbS92MS9yYXRlcycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjXG4gICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgIC8vIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FQSS1LZXknOiAnVEVTVF9LUDF0dVNNR1RCci9YUEcwY3BLaDRZRWkrY1Z6Wmh2YlBkYkoraG5FUmRJJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgc2V0U2hpcHBpbmdEYXRhKHJlc3VsdCk7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXG4gICAgICAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xuICAgICAgICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPjtcbiAgcmV0dXJuIDxwPlNoaXBwaW5nOiB7c2hpcHBpbmdEYXRhID8gJ3dlIGdvdCBzb21ldGhpbmcnIDogJ25vdCB5ZXQnfTwvcD47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Shipping.js\n");

/***/ })

})