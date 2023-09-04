import { TaskGroupType } from "@/app/manage/components/DetermineGroupByType";
import { Task } from "@/types/Task";

export const SortGroupedTasks = (
  GroupByType: TaskGroupType[],
  sortBy: string,
  sortOrder: string,
) => {
  GroupByType.map((type) => {
    if (sortBy) {
      type.TaskList.sort((a, b) => {
        const firstValue = a[sortBy as keyof Task];
        const secondValue = b[sortBy as keyof Task];

        if (
          firstValue &&
          secondValue &&
          sortOrder &&
          sortOrder === "ascending"
        ) {
          if (firstValue > secondValue) {
            return 1;
          } else if (firstValue < secondValue) {
            return -1;
          } else {
            return 0;
          }
        } else if (
          firstValue &&
          secondValue &&
          sortOrder &&
          sortOrder === "descending"
        ) {
          if (firstValue < secondValue) {
            return 1;
          } else if (firstValue > secondValue) {
            return -1;
          } else {
            return 0;
          }
        }

        return 1;
      });
    } else {
    }
  });

  return GroupByType;
};
