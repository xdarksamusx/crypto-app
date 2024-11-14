export const convertCurrency = (
  amount: number,
  fromRate: number,
  toRate: number
): number => {
  return (amount * fromRate) / toRate;
};
