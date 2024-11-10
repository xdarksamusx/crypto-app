export const currentDate = (): number => {
  const currentDate = new Date();
  const unixTime = Math.floor(currentDate.getTime() / 1000);
  return unixTime;
};

export const previousDate = (days: number): number => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);
  const unixTime = Math.floor(currentDate.getTime() / 1000);
  return unixTime;
};
