import countriesData from "../config/data.json";

export const getTipPercent = ({ countryCode, review }) => {
  const min = countriesData[countryCode].minPercentage;
  const max = countriesData[countryCode].maxPercentage;
  const step = (max - min) / 4;

  return min + (step * (review - 1));
};

export const getTotal = ({ bill, countryCode, review }) => {
  return (bill * (100 + getTipPercent({ countryCode, review }))) / 100;
};
