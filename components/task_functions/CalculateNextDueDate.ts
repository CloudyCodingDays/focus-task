export const CalculateNextDueDate = (
  recurringType: string,
  dueDate: string
) => {
  let Due = new Date(dueDate);

  Due.setHours(0, 0, 0);
  Due.setMilliseconds(0);

  Due.setDate(Due.getDate() + 1); //Add one day to bring it back to current day after date conversion

  if (recurringType.toLocaleLowerCase() === "monthly") {
    let expectedMonth = Due.getMonth();
    Due.setMonth(Due.getMonth() + 1, Due.getDate());

    if (Due.getMonth() !== expectedMonth) Due.setMonth(expectedMonth, 0);
  }

  if (recurringType.toLocaleLowerCase() === "bi-weekly") {
    Due.setDate(Due.getDate() + 14);
  }

  if (recurringType.toLocaleLowerCase() === "weekly") {
    Due.setDate(Due.getDate() + 7);
  }

  if (recurringType.toLocaleLowerCase() === "daily") {
    Due.setDate(Due.getDate() + 1);
  }

  return Due.toLocaleDateString();
};
