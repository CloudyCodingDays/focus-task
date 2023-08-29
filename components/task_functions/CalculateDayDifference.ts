import { eachDayOfInterval, intervalToDuration, isEqual } from "date-fns";
import { addDays, subDays } from "date-fns";
import isAfter from "date-fns/isAfter";

//Does not include start date - It DOES include end date in calculate so tomorrow would be 1 day. Today would be 0 days
export const CalculateDayDifference = (date: string) => {
  const currentDate = new Date(Date.now());
  const dateTime = new Date(date);
  const dateArray = date.split("-");

  //set dates to midnight and trim milliseconds as well for consistent comparison
  currentDate.setHours(0, 0, 0);
  currentDate.setMilliseconds(0);
  dateTime.setHours(0, 0, 0);
  dateTime.setMilliseconds(0);

  if (isEqual(currentDate, dateTime)) return 0;

  if (isAfter(currentDate, dateTime)) {
    const intervalDuration = eachDayOfInterval({
      start: new Date(
        parseInt(dateArray[0]),
        parseInt(dateArray[1]) - 1,
        parseInt(dateArray[2])
      ),
      end: currentDate,
    });

    return (intervalDuration.length - 1) * -1;
  } else {
    const intervalDuration = eachDayOfInterval({
      start: currentDate,
      end: new Date(
        parseInt(dateArray[0]),
        parseInt(dateArray[1]) - 1,
        parseInt(dateArray[2])
      ),
    });

    return intervalDuration.length - 1;
  }
};
