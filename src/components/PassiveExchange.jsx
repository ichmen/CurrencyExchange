import React, { useState } from 'react';
import { passiveCurriencies } from '../common/utils';
const defaultCurrency = 'USD';

export default function PassiveExchange({ setCurrency, currency }) {
  return (
    <fieldset>
      <legend>Select currency</legend>
      {passiveCurriencies.map(cur => (
        <div key={cur}>
          <input
            type="radio"
            id={cur}
            name="cur"
            value={cur}
            defaultChecked={cur === currency}
            onChange={e => setCurrency(e.target.value)}
          />
          <label htmlFor="cur">{cur}</label>
        </div>
      ))}
    </fieldset>
  );
}
