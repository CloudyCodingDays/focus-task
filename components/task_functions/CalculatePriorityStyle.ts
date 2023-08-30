export const CalculatePriorityStyle = (priority: string) => {
  if (priority.toLocaleLowerCase() === "high") {
    return "red";
  } else if (priority.toLocaleLowerCase() === "medium") {
    return "orange";
  } else if (priority.toLocaleLowerCase() === "low") {
    return "gray";
  }
};
