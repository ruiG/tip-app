import React, { useState } from "react";
import * as R from "rambda";
import countriesData from "../../config/data.json";

function Form() {
  const [step, setStep] = useState(0);

  const handleNextState = step => {
    setStep(step);
  };

  return (
    <div className="form">
      <h1>Where are you?</h1>
      <CountrySelect countries={countriesData} />
    </div>
  );
}

const CountrySelect = ({ countries }) => {
  const countryOption = ({ countryKey, name }) => (
    <option value={countryKey}>{name}</option>
  );

  const countryOptions = R.map(countryOption, R.values(countries));

  console.log(countryOptions);
  return (
    <select>
      <option value="">Select a Country</option>
      {countryOptions}
    </select>
  );
};

export default Form;
