export const FormatDateRemoveTime = (date?: string) => {
  const newDate = date ? new Date(date) : new Date(Date.now());
  newDate.setHours(0, 0, 0);
  newDate.setMilliseconds(0);
  return newDate;
};
