import { expect, test } from "vitest";
import { CalculateDayDifference } from "./CalculateDayDifference";

import { addDays, subDays } from "date-fns";

const TodayDate = new Date(Date.now());
const YesterdayDate = subDays(new Date(Date.now()), 1);
const MonthAgoDate = subDays(new Date(Date.now()), 30);
const YearAgoDate = subDays(new Date(Date.now()), 365);
const TomorrowDate = addDays(new Date(Date.now()), 1);
const MonthDate = addDays(new Date(Date.now()), 30);
const WeekDate = addDays(new Date(Date.now()), 7);
const YearDate = addDays(new Date(Date.now()), 365);

//Imitate date format timestamp from due date column in supabase table
const FormatDate = (date: Date) => {
  const year = date.getFullYear();
  date.setMonth(date.getMonth() + 1);
  const month = date.getMonth();
  const day = date.getDate();

  return year.toString() + "-" + month.toString() + "-" + day.toString();
};
test("Pass in Today's date and the function should return 0 days", () => {
  expect(CalculateDayDifference(FormatDate(TodayDate))).toBe(0);
});

test("Pass in yesterday's date and the function should return -1 days", () => {
  expect(CalculateDayDifference(FormatDate(YesterdayDate))).toBe(-1);
});

test("Pass in one month ago date and the function should return -30 days", () => {
  expect(CalculateDayDifference(FormatDate(MonthAgoDate))).toBe(-30);
});

test("Pass in date from one year ago and the function should return -365 days", () => {
  expect(CalculateDayDifference(FormatDate(YearAgoDate))).toBe(-365);
});

test("Pass in tomorrow's date and the function should return 1 days", () => {
  expect(CalculateDayDifference(FormatDate(TomorrowDate))).toBe(1);
});

test("Pass in date that is one week from now and the function should return 7 days", () => {
  expect(CalculateDayDifference(FormatDate(WeekDate))).toBe(7);
});

test("Pass in date that is 30 days from now and the function should return 30 days", () => {
  expect(CalculateDayDifference(FormatDate(MonthDate))).toBe(30);
});

test("Pass in date that is 1 year from now and the function should return 365 days", () => {
  expect(CalculateDayDifference(FormatDate(YearDate))).toBe(365);
});
