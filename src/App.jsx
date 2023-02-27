import React, { createContext, useEffect, useReducer } from 'react';
import ActiveExchange from './components/ActiveExchange';
import { getCurrencyRates } from './common/gateway';
import PassiveContainer from './components/PassiveContainer';
import UpdateRatesButton from './components/UpdateRatesButton';
import AddCurrenciesButton from './components/AddCurrenciesButton';
import PopUp from './components/PopUp';

export const RatesContext = createContext(null);
const initialState = { rates: null, isVisible: false };

export default function App() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState,
  );

  useEffect(() => {
    updateRates();
  }, []);

  function updateRates() {
    getCurrencyRates().then(data => setState({ rates: data }));
  }
  return (
    <RatesContext.Provider value={state.rates}>
      <div className="container">
        <h3 className="container__title">Currency exchange rates</h3>
        <ActiveExchange />
        <PassiveContainer />
        <div className="buttons-container">
          <UpdateRatesButton updateRates={updateRates} />
          <AddCurrenciesButton toggleVisibility={setState} />
        </div>
        <PopUp className="popup-window" isVisible={state.isVisible} toggleVisibility={setState} />
      </div>
    </RatesContext.Provider>
  );
}
