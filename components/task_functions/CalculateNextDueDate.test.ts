import { expect, test } from "vitest";

import { addDays, subDays } from "date-fns";
import { CalculateNextDueDate } from "./CalculateNextDueDate";

const TodayDate = new Date(Date.now());
const YesterdayDate = subDays(new Date(Date.now()), 1);
const MonthAgoDate = subDays(new Date(Date.now()), 30);
const YearAgoDate = subDays(new Date(Date.now()), 365);
const TomorrowDate = addDays(new Date(Date.now()), 1);

const WeekDate = addDays(new Date(Date.now()), 7);
const BiweekDate = addDays(new Date(Date.now()), 14);
const MonthDate = addDays(new Date(Date.now()), 30);

const YearDate = addDays(new Date(Date.now()), 365);

let strictMonthDate = new Date(Date.now());
let expectedMonth = strictMonthDate.getMonth();
strictMonthDate.setMonth(
  strictMonthDate.getMonth() + 1,
  strictMonthDate.getDate()
);

if (strictMonthDate.getMonth() !== expectedMonth)
  strictMonthDate.setMonth(expectedMonth, 0);

//Imitate date format timestamp from due date column in supabase table
const FormatDate = (date: Date) => {
  date.setHours(0, 0, 0);
  date.setMilliseconds(0);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return year.toString() + "-" + month.toString() + "-" + day.toString();
};

test("Calculate Next due date for Daily task due today", () => {
  expect(CalculateNextDueDate("daily", FormatDate(TodayDate))).toBe(
    TomorrowDate.toLocaleDateString()
  );
});

test("Calculate Next due date for weekly task due today", () => {
  expect(CalculateNextDueDate("weekly", FormatDate(TodayDate))).toBe(
    WeekDate.toLocaleDateString()
  );
});

test("Calculate Next due date for bi-weekly task due today", () => {
  expect(CalculateNextDueDate("bi-weekly", FormatDate(TodayDate))).toBe(
    BiweekDate.toLocaleDateString()
  );
});

test("Calculate Next due date for Monthly task due today", () => {
  expect(CalculateNextDueDate("monthly", FormatDate(TodayDate))).toBe(
    strictMonthDate.toLocaleDateString()
  );
});
