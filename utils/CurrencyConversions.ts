"use client";

import BigNumber from "bignumber.js";

export const convertCurrency = (
  currentCurrency: string,
  selectedCurrency: string | null,
  amount: number
) => {
  let conversion;

  const btcToUSD = 57000;
  const ethToUSD = 2300;

  if (!currentCurrency || !selectedCurrency || !amount) {
    return amount;
  }

  switch (currentCurrency.trim().toLowerCase()) {
    case "$":
      switch (selectedCurrency) {
        case "€":
          conversion = amount / 1.1;
          return conversion;
        case "£":
          conversion = amount / 1.3;
          return conversion;
        case "₿":
          conversion = amount / btcToUSD;

          return conversion;
        case "Ξ":
          conversion = amount / ethToUSD;
          return conversion;
        default:
          return amount;
      }
    case "€":
      switch (selectedCurrency?.trim().toLowerCase()) {
        case "$":
          conversion = amount * 1.1;
          return conversion;
        case "£":
          conversion = amount / 1.18;
          return conversion;
        case "₿":
          conversion = amount / btcToUSD;
          return conversion;
        case "Ξ":
          conversion = amount / ethToUSD;
          return conversion;
        default:
          return amount;
      }
    case "£":
      switch (selectedCurrency?.trim().toLowerCase()) {
        case "$":
          conversion = amount * 1.31;
          return conversion;
        case "€":
          conversion = amount * 1.18;
          return conversion;
        case "₿":
          conversion = amount / 44000;
          return conversion;

        case "Ξ":
          conversion = amount / 1800;
          return conversion;
        default:
          return amount;
      }
    case "₿":
      switch (selectedCurrency?.trim().toLowerCase()) {
        case "$":
          conversion = amount * 57000;
          return conversion;
        case "€":
          conversion = amount * 52000;
          return conversion;
        case "£":
          conversion = amount * 44000;
          return conversion;
        case "Ξ":
          conversion = amount * 24;
          return conversion;
        default:
          return amount;
      }
    case "Ξ":
      switch (selectedCurrency?.trim().toLowerCase()) {
        case "$":
          conversion = amount * 2300;
          return conversion;

        case "€":
          conversion = amount * 2150;
          return conversion;
        case "£":
          conversion = amount * 1800;
          return conversion;
        case "₿":
          conversion = amount / 24;
          return conversion;
        default:
          return amount;
      }
    default:
      return amount;
  }
};

export const convertCurrencyArray = (
  currentCurrency: string,
  selectedCurrency: string | null,
  currencyArray: number[]
) => {
  const btcToUSD = 57000;
  const ethToUSD = 2300;

  let convertedCurrencyArray;

  switch (currentCurrency.trim().toLowerCase()) {
    case "$":
      switch (selectedCurrency) {
        case "€":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / 1.1;
          });
          return convertedCurrencyArray;

        case "£":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / 1.3;
          });
          return convertedCurrencyArray;

        case "₿":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / btcToUSD;
          });
          return convertedCurrencyArray;

        case "Ξ":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / ethToUSD;
          });
          return convertedCurrencyArray;

        default:
          return currencyArray;
      }
    case "€":
      switch (selectedCurrency?.trim().toLowerCase()) {
        case "$":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 1.1;
          });
          return convertedCurrencyArray;

        case "£":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / 1.18;
          });
          return convertedCurrencyArray;

        case "₿":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / btcToUSD;
          });
          return convertedCurrencyArray;

        case "Ξ":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / ethToUSD;
          });
          return convertedCurrencyArray;

        default:
          return currencyArray;
      }
    case "£":
      switch (selectedCurrency?.trim().toLowerCase()) {
        case "$":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 1.31;
          });
          return convertedCurrencyArray;

        case "€":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 1.18;
          });
          return convertedCurrencyArray;

        case "₿":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / btcToUSD;
          });
          return convertedCurrencyArray;

        case "Ξ":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / ethToUSD;
          });
          return convertedCurrencyArray;

        default:
          return currencyArray;
      }
    case "₿":
      switch (selectedCurrency?.trim().toLowerCase()) {
        case "$":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 57000;
          });
          return convertedCurrencyArray;

        case "€":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 52000;
          });
          return convertedCurrencyArray;

        case "£":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 42000;
          });
          return convertedCurrencyArray;

        case "Ξ":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 24;
          });
          return convertedCurrencyArray;

        default:
          return currencyArray;
      }
    case "Ξ":
      switch (selectedCurrency?.trim().toLowerCase()) {
        case "$":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 2300;
          });
          return convertedCurrencyArray;

        case "€":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 2150;
          });
          return convertedCurrencyArray;

        case "£":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency * 1800;
          });
          return convertedCurrencyArray;

        case "₿":
          convertedCurrencyArray = currencyArray.map((currency) => {
            return currency / 24;
          });
          return convertedCurrencyArray;

        default:
          return currencyArray;
      }
    default:
      return currencyArray;
  }
};
