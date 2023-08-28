export const CalculateNextDueDate = (
  recurringType: string,
  dueDate?: string
) => {
  let newDueDate =
    dueDate !== undefined ? new Date(dueDate) : new Date(Date.now());
  console.log(newDueDate);
  newDueDate.setDate(newDueDate.getDate() + 1); //Add one day to bring it back to current day after date conversion
  console.log(newDueDate);

  if (recurringType.toLocaleLowerCase() === "monthly") {
    let expectedMonth = newDueDate.getMonth();
    newDueDate.setMonth(newDueDate.getMonth() + 1, newDueDate.getDate());

    if (newDueDate.getMonth() !== expectedMonth)
      newDueDate.setMonth(expectedMonth, 0);
  }

  if (recurringType.toLocaleLowerCase() === "bi-weekly") {
    newDueDate.setDate(newDueDate.getDate() + 14);
  }

  if (recurringType.toLocaleLowerCase() === "weekly") {
    newDueDate.setDate(newDueDate.getDate() + 7);
  }

  if (recurringType.toLocaleLowerCase() === "daily") {
    newDueDate.setDate(newDueDate.getDate() + 1);
  }

  return newDueDate.toDateString();
};
