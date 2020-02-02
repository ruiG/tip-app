import React, { useState } from "react";
import * as R from "rambda";
import countriesData from "../../config/data.json";
import Review from "../Review";

function Form() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    countryCode: "",
    bill: 0,
    tipPercent: 0
  });

  const handleNextState = step => {
    setStep(step);
  };

  const setCountry = countryCode => {
    if (step < 1) {
      setStep(1);
    }
    setForm({ ...form, countryCode });
  };

  const setBill = bill => {
    if (step < 2) {
      setStep(2);
    }
    setForm({ ...form, bill });
  };

  return (
    <div className="form">
      <h1>Where are you?</h1>
      {step >= 0 ? (
        <CountrySelect
          countries={countriesData}
          selectedCountry={form.countryCode}
          onSetCountry={setCountry}
        />
      ) : null}
      {step >= 1 ? <Bill bill={form.bill} onSetBill={setBill} /> : null}
      {step >= 2 ? <Review /> : null}
    </div>
  );
}

const Bill = ({ bill, onSetBill }) => {
  const handleSetBill = event => {
    console.log(event);
    onSetBill(event.target.value);
  };

  return (
    <div>
      <input onChange={handleSetBill} type="tel" pattern="[0-9]*" novalidate />
    </div>
  );
};

const Info = () => <div>Info</div>;

const CountrySelect = ({ countries, selectedCountry, onSetCountry }) => {
  const countryOption = ({ countryKey, name }) => (
    <option key={countryKey} value={countryKey}>
      {name}
    </option>
  );

  const handleSetCountry = event => {
    onSetCountry(event.target.value);
  };

  const countryOptions = R.map(countryOption, R.values(countries));

  return (
    <select
      id="countrySelect"
      onChange={handleSetCountry}
      value={selectedCountry}
    >
      <option value="">Select a Country</option>
      {countryOptions}
    </select>
  );
};

export default Form;
