export const CalculateDueDateStyle = (dayDifference: number) => {
  if (dayDifference > 7) {
    return "text-gray-400 text-xs font-extralight pl-2";
  } else if (dayDifference < 7 && dayDifference > 0) {
    return "text-gray-500 text-xs pl-2";
  } else if (dayDifference <= 0) {
    return "text-gray-500 text-xs font-semibold pl-2";
  }
};
