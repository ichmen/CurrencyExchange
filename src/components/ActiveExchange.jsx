import React, { useContext, useEffect, useState, useReducer } from 'react';

import { exchangableCurriencies } from '../common/utils';
import { RatesContext } from '../App';
import { currencyCalculator } from '../common/utils';

const initialState = {
  mainCurrency: 'USD',
  secondaryCurrency: 'BTC',
  mainAmount: 0,
  secondaryAmount: 0,
};

const maxSecondaryAmount = 10000;

export default function ActiveExchange() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState,
  );
  const rates = useContext(RatesContext);
  function handleMainAmount(amount) {
    setState({
      mainAmount: amount,
      secondaryAmount: currencyCalculator(
        state.mainCurrency,
        state.secondaryCurrency,
        amount,
        rates,
      ),
    });
  }
  function handleSecondaryAmount(amount) {
    if (currencyCalculator(state.secondaryCurrency, 'USD', amount, rates) > maxSecondaryAmount) {
      console.log(state);
      amount = currencyCalculator('USD', state.secondaryCurrency, maxSecondaryAmount, rates);
    }
    setState({
      secondaryAmount: amount,
      mainAmount: currencyCalculator(state.secondaryCurrency, state.mainCurrency, amount, rates),
    });
  }
  function handleMainCurrency(currency) {
    setState({
      mainCurrency: currency,
      secondaryAmount: currencyCalculator(
        currency,
        state.secondaryCurrency,
        state.mainAmount,
        rates,
      ),
    });
  }
  function handleSecondaryCurrency(currency) {
    setState({
      secondaryCurrency: currency,
      secondaryAmount: currencyCalculator(state.mainCurrency, currency, state.mainAmount, rates),
    });
  }

  return (
    <div>
      <select
        name="mainCurrency"
        onChange={e => handleMainCurrency(e.target.value)}
        value={state.mainCurrency}
      >
        {exchangableCurriencies.map(curr => (
          <option key={curr}>{curr}</option>
        ))}
      </select>
      <input
        name="mainAmount"
        value={state.mainAmount}
        type="number"
        min={0}
        max={1000000}
        onChange={e => handleMainAmount(e.target.value)}
      ></input>

      {/*  */}
      <select
        name="secondaryCurrency"
        onChange={e => handleSecondaryCurrency(e.target.value)}
        value={state.secondaryCurrency}
      >
        {exchangableCurriencies.map(curr => (
          <option key={curr}>{curr}</option>
        ))}
      </select>
      <input
        name="second"
        value={state.secondaryAmount}
        type="number"
        min={0}
        max={1000000}
        onChange={e => handleSecondaryAmount(e.target.value)}
      ></input>
    </div>
  );
}
