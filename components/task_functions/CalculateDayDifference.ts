export const CalculateDayDifference = (validatedDateTime: number) => {
  const currentDate = new Date().getTime();

  const diffDays = Math.ceil(
    (validatedDateTime - currentDate) / (1000 * 3600 * 24)
  );

  return diffDays;
};
