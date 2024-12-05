export const absoluteValue = (a: number) => {
  return Math.abs(a);
};

export const formatPercentage = (value: number | null): string => {
  if (value === null || value === undefined) return "0.00%";

  const absValue = Math.abs(value);
  return Number.isInteger(absValue)
    ? `${absValue.toFixed(2)}%`
    : `${absValue.toFixed(2)}%`;
};
