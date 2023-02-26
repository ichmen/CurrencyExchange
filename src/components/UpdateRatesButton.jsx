import React, { useState } from 'react';

export default function UpdateRatesButton({ updateRates }) {
  const [isDisabled, setDisabled] = useState(false);
  function clickHandler() {
    updateRates();
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  }
  return (
    <button className="updateButton" disabled={isDisabled} onClick={() => clickHandler()}>
      update
    </button>
  );
}
