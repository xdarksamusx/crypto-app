export const convertCurrency = (
  currentCurrency: string,
  selectedCurrency: string,
  amount: number
) => {
  let conversion;

  switch (currentCurrency) {
    case "$":
      switch (selectedCurrency) {
        case "€":
          conversion = amount / 1.1;
          return conversion;
        case "£":
          conversion = amount / 1.3;
        case "btc":
          conversion = amount / 57000;
          return conversion;
        case "eth":
          conversion = amount / 2300;
      }
    case "€":
      switch (selectedCurrency) {
        case "$":
          conversion = amount / 0.91;
          return conversion;
        case "£":
          conversion = amount / 1.18;
          return conversion;
        case "btc":
          conversion = amount / 52000;
          return conversion;
        case "eth":
          conversion = amount / 2150;
          return conversion;
      }
    case "£":
      switch (selectedCurrency) {
        case "$":
          conversion = amount / 0.71;
          return conversion;
        case "€":
          conversion = amount / 0.85;
          return conversion;
        case "btc":
          conversion = amount / 44000;

        case "eth":
          conversion = amount / 1800;
          return conversion;
      }
    case "btc":
      switch (selectedCurrency) {
        case "$":
          conversion = amount / 1.75e-5;
          return conversion;
        case "€":
          conversion = amount / 1.92e-5;
          return conversion;
        case "£":
          conversion = amount / (2.273 - 5);
          return conversion;
        case "eth":
          conversion = amount / 24;
          return conversion;
      }
    case "eth":
      switch (selectedCurrency) {
        case "$":
          conversion = amount / (4.343 - 4);
        case "€":
          conversion = amount / (4.653 - 4);
          return conversion;
        case "£":
          conversion = amount / 5.553e-4;
          return conversion;
        case "btc":
          conversion = amount / 0.41;
          return conversion;
      }
  }
};
