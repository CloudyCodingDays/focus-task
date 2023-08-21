const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const DateFormatDisplay = (currentDate: Date) => {
  const formattedDate =
    currentDate.getDate() +
    "-" +
    monthNames[currentDate.getMonth()] +
    "-" +
    currentDate.getFullYear();

  return formattedDate;
};
