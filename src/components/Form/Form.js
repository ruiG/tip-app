import React, { useState } from "react";
import * as R from "rambda";
import { InputNumber, Select } from "antd";
import countriesData from "../../config/data.json";
import "./Form.scss";
import Review from "../Review";

const { Option } = Select;

const Form = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    countryCode: "",
    bill: null,
    tipPercent: 0
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

  console.log(step, form);

  return (
    <div className="form">
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
};

const Bill = ({ bill, onSetBill }) => {
  const handleSetBill = value => {
    onSetBill(value);
  };

  return (
    <div className="form__input">
      <InputNumber
        placeholder={"How much is the bill?"}
        min={1}
        defaultValue={bill}
        onChange={handleSetBill}
        style={{ width: "100%" }}
      />
    </div>
  );
};

const Info = () => <div>Info</div>;

const CountrySelect = ({ countries, onSetCountry }) => {
  const countryOption = ({ countryKey, name }) => (
    <Option key={countryKey} value={countryKey}>
      {name}
    </Option>
  );

  const handleSetCountry = country => {
    onSetCountry(country);
  };

  const countryOptions = R.map(countryOption, R.values(countries));

  return (
    <div className="form__input">
      <Select
        placeholder="Where are you?"
        onChange={handleSetCountry}
        style={{ width: "100%" }}
      >
        {countryOptions}
      </Select>
    </div>
  );
};

export default Form;
