export const CalculatePriorityIconStyle = (
  priority: string,
  dayDifference: number
) => {
  if (priority.toLocaleLowerCase() === "high" && dayDifference <= 1) {
    return "red";
  } else if (priority.toLocaleLowerCase() === "medium" && dayDifference <= 1) {
    return "black";
  } else if (priority.toLocaleLowerCase() === "low" && dayDifference <= 1) {
    return "black";
  }
};
