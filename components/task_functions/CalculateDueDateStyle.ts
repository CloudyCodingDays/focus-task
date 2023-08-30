export const CalculateDueDateStyle = (dayDifference: number) => {
  if (dayDifference > 7) {
    return "gray";
  } else if (dayDifference < 3 && dayDifference > 0) {
    return "orange";
  } else if (dayDifference <= 0) {
    return "red";
  }
};
