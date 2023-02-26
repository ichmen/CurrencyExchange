import React, { useContext, useState } from 'react';
import { RatesContext } from '../App';
import { getPassiveCurrencies, setPassiveCurrencies } from '../common/utils';

export default function PopUp({ isVisible, toggleVisibility }) {
  const rates = useContext(RatesContext);
  const [currency, setCurrency] = useState();
  if (!isVisible || !rates) {
    return null;
  }
  function currencyChangeHandler(currency) {
    if (!currency) {
      console.log('here');
      return;
    }
    passiveCurrenciesList.push(currency);
    setPassiveCurrencies(passiveCurrenciesList);
    toggleVisibility({ isVisible: false });
  }
  const allCurrencies = Object.keys(rates.rates);
  allCurrencies.unshift('');
  const passiveCurrenciesList = getPassiveCurrencies();
  return (
    <div className="popup-window">
      <div className="popup-window__dialog-box">
        <h4 className="popup-window__title">Plese select currency to add</h4>
        <div>
          <select onChange={e => setCurrency(e.target.value)}>
            {allCurrencies
              .filter(cur => !passiveCurrenciesList.includes(cur))
              .map(cur => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
          </select>
          <button className="popup-window__button" onClick={() => currencyChangeHandler(currency)}>
            submit
          </button>
          <button
            className="popup-window__button"
            onClick={() => toggleVisibility({ isVisible: false })}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
