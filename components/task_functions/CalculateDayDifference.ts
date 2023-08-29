import addDays from "date-fns/addDays";
export const CalculateDayDifference = (date: string) => {
  const validatedDate = addDays(new Date(date), 1);
  const validatedDateTime = new Date(validatedDate).getTime();
  const currentDate = new Date().getTime();

  const diffDays = Math.ceil(
    (validatedDateTime - currentDate) / (1000 * 3600 * 24)
  );

  console.log(diffDays);
  return diffDays;
};
