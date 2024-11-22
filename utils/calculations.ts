export const absoluteValue = (a: number) => {
  return Math.abs(a);
};

export const formatPercentage = (value: number | null): string => {
  if (value === null || value === undefined) return "0.00%"; // Handle null or undefined cases

  const absValue = Math.abs(value); // Take absolute value
  return Number.isInteger(absValue) // Check if it's an integer
    ? `${absValue.toFixed(2)}%` // Add '.00' for integers
    : `${absValue.toFixed(2)}%`; // Keep two decimals for floats
};
