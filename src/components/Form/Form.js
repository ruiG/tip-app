import React, { useState } from "react";
import * as R from "rambda";
import { InputNumber, Select, Spin, Typography } from "antd";
import countriesData from "../../config/data.json";
import { getTipPercent, getTotal } from "../../util/formulas";
import "./Form.scss";
import Review from "../Review";
import Button from "../Button";

const { Option } = Select;
const { Title } = Typography;

const Form = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    countryCode: "",
    bill: null,
    review: null,
    tipPercent: null,
    total: null
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

  const setCalculate = () => {
    if (step < 4) {
      setStep(4);
    }
    setForm({
      ...form,
      tipPercent: getTipPercent(form),
      total: getTotal(form)
    });
  };

  return (
    <div className="form">
      {step >= 0 && step !== 4 ? (
        <CountrySelect
          countries={countriesData}
          selectedCountry={form.countryCode}
          onSetCountry={setCountry}
        />
      ) : null}
      {step >= 1 && step !== 4 ? (
        <Bill bill={form.bill} onSetBill={setBill} />
      ) : null}
      {step >= 2 && step !== 4 ? (
        <Review review={form.review} onSetReview={setReview} />
      ) : null}
      {step >= 3 && step !== 4 ? (
        <Button onClick={setCalculate} label={"Calculate"} />
      ) : null}
      {step === 4 ? (
        <Info tipPercent={form.tipPercent} total={form.total} />
      ) : null}
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
        size="large"
        onChange={handleSetBill}
        size="large"
        style={{ width: "100%" }}
      />
    </div>
  );
};

const Info = ({ tipPercent, total }) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return isLoading ? (
    <Spin size="large" />
  ) : (
    <div>
      <Title level={2}>
        Voila <span>🎉</span>
      </Title>
      <Title
        level={4}
      >{`We suggest a tip of ${tipPercent}%, adding to a total of ${total}`}</Title>
    </div>
  );
};

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
        size="large"
        style={{ width: "100%" }}
      >
        {countryOptions}
      </Select>
    </div>
  );
};

export default Form;
