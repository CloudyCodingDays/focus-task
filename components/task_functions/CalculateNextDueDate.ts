import { addDays, addMonths } from "date-fns";
import format from "date-fns/format";

export const CalculateNextDueDate = (
  recurringType: string,
  dueDate: string,
) => {
  let Due = new Date(dueDate);

  Due.setHours(0, 0, 0);
  Due.setMilliseconds(0);

  addDays(Due, 1); //Add one day to bring it back to current day after date conversion

  if (recurringType.toLocaleLowerCase() === "monthly") {
    let expectedMonth = Due.getMonth();
    addMonths(Due, 1);

    if (Due.getMonth() !== expectedMonth) Due.setMonth(expectedMonth, 0);
  }

  if (recurringType.toLocaleLowerCase() === "bi-weekly") {
    addDays(Due, 14);
  }

  if (recurringType.toLocaleLowerCase() === "weekly") {
    addDays(Due, 7);
  }

  if (recurringType.toLocaleLowerCase() === "daily") {
    addDays(Due, 1);
  }

  return format(Due, "P");
};
