import countriesData from "../config/data.json";

export const getTipPercent = ({ countryCode, review }) => {
  const min = countriesData[countryCode].minPercentage;
  const max = countriesData[countryCode].maxPercentage;
  const step = (max - min) / 4;

  return Number(parseFloat(min + step * (review - 1)).toFixed(2));
};

export const getTotal = ({ bill, countryCode, review }) =>
  parseFloat(
    (bill * (100 + getTipPercent({ countryCode, review }))) / 100
  ).toFixed(2);
