import React, { useContext } from 'react';
import { getPassiveCurrencies } from '../common/utils';
import { currencyCalculator } from '../common/utils';
import { RatesContext } from '../App';

export default function PassiveRates({ currency }) {
  const rates = useContext(RatesContext);
  if (!rates) {
    return null;
  }
  const passiveCurriencies = getPassiveCurrencies();
  return (
    <fieldset className="passive-rates">
      <legend>Exchange ratio to 1 {currency}</legend>
      {passiveCurriencies
        .filter(cur => Object.keys(rates.rates).includes(cur))
        .map(cur => (
          <div className="passive-rates__" key={cur}>
            <label htmlFor="cur" className="passive-rates__currency">
              {cur}
            </label>
            <input
              className="passive-rates__amount"
              type="number"
              value={currencyCalculator(currency, cur, 1, rates)}
              disabled
            />
          </div>
        ))}
    </fieldset>
  );
}
