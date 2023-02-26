import React, { useState } from 'react';
import classNames from 'classnames';

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
    <button
      className={classNames({ disabled: isDisabled })}
      disabled={isDisabled}
      onClick={() => clickHandler()}
    >
      update
    </button>
  );
}
