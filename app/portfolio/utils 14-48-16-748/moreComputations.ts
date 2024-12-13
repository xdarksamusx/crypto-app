export const numberWithCommas = (number: number) => {
  if (number >= 1) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return number;
  }
};
