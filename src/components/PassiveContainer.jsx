import React, { useState } from 'react';
import PassiveExchange from './PassiveExchange';
import PassiveRates from './PassiveRates';
const initialState = 'USD';

export default function PassiveContainer() {
  const [currency, setCurrency] = useState(initialState);
  return (
    <>
      <PassiveExchange setCurrency={setCurrency} currency={currency} />
      <PassiveRates currency={currency} />
    </>
  );
}
