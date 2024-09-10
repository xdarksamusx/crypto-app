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
          conversion = amount / 2300;
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
