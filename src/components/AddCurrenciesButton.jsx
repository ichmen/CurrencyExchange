import React from 'react';

export default function AddCurrenciesButton({ toggleVisibility }) {
  return <button onClick={() => toggleVisibility({ isVisible: true })}>add</button>;
}
