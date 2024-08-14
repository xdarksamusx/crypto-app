export const getDayLabels = () => {
  let hourArray = [];
  const hoursToGoBack = 24;

  for (let i = 0; i <= hoursToGoBack; i += 6) {
    const currentDate = new Date();

    const newHour = new Date(currentDate);
    newHour.setHours(newHour.getHours() - i);

    const hour = newHour.getHours();

    hourArray.push(`${hour}:00`);
  }

  return hourArray;
};

export const getFourteenDayLabels = () => {
  const currentDate = new Date();
  let dayArray = [];

  const daysToGoBack = 5;

  for (let i = 0; i < daysToGoBack; i++) {
    const newDay = new Date(currentDate);
    newDay.setDate(currentDate.getDate() - i);

    const month = newDay.toLocaleString("default", { month: "short" });
    const day = newDay.getDate();

    dayArray.push(`${month} ${day}`);

    console.log("14 days", dayArray);
  }

  return dayArray;
};

export const getYearLabels = () => {
  const currentDate = new Date();
  let dateArray = [];

  const monthsToGoBack = 5;

  for (let i = 0; i <= monthsToGoBack; i++) {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - i);

    if (newDate.getDate() !== currentDate.getDate()) {
      newDate.setDate(0);
    }

    const month = newDate.toLocaleString("default", { month: "short" });
    const day = newDate.getDate();
    dateArray.push(`${month} ${day}`);
  }
  return dateArray;
};

export const getWeekLabels = () => {
  const currentDate = new Date();
  let weekArray = [];

  const daysToGoBack = 7;

  for (let i = 0; i <= daysToGoBack; i++) {
    const newDay = new Date(currentDate);
    newDay.setDate(newDay.getDate() - i);

    const month = newDay.toLocaleString("default", { month: "short" });
    const day = newDay.getDate();

    weekArray.push(`${month} ${day}`);
  }

  return weekArray;
};

export const getMonthlyLabels = () => {
  const currentDate = new Date();
  let monthArray = [];

  const daysToGoBack = 30;
  const interval = Math.floor(30 / 7);

  for (let i = 0; i <= daysToGoBack; i += interval) {
    const newDay = new Date(currentDate);
    newDay.setDate(newDay.getDate() - i);

    const month = newDay.toLocaleString("default", { month: "short" });
    const day = newDay.getDate();

    monthArray.push(`${month} ${day}`);
  }

  return monthArray;
};

export const getThreeMonthLabels = () => {
  const currentDate = new Date();
  let monthArray = [];

  const daysToGoBack = 93;
  const interval = Math.floor(daysToGoBack / 7);

  for (let i = 0; i <= daysToGoBack; i += interval) {
    const newDay = new Date(currentDate);
    newDay.setDate(newDay.getDate() - i);

    const month = newDay.toLocaleString("default", { month: "short" });
    const day = newDay.getDate();

    monthArray.push(`${month} ${day}`);
  }

  return monthArray;
};
