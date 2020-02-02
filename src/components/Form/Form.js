import React, { useState } from "react";
import * as R from "rambda";
import countriesData from "../../config/data.json";
import Review from "../Review";

function Form() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    countryCode: "",
    bill: 0,
    review: null,
    tipPercent: null,
    total: null, 
  });

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

  const setReview = review => {
    if (step < 3) {
      setStep(3);
    }
    setForm({ ...form, review });
  };

  console.log(step, form);

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
      {step >= 2 ? <Review review={form.review} onSetReview={setReview} /> : null}
      {step >= 3 ? <Info/> : null}
    </div>
  );
}

const Bill = ({ bill, onSetBill }) => {
  const handleSetBill = event => {
    onSetBill(event.target.value);
  };

  return (
    <div>
      <input
        onChange={handleSetBill}
        type="tel"
        pattern="[0-9]*"
        noValidate
        value={bill}
      />
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
