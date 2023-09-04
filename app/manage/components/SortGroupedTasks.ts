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
        let firstValue = a[sortBy as keyof Task];
        let secondValue = b[sortBy as keyof Task];

        if (firstValue && secondValue) {
          if (sortOrder && sortOrder === "ascending") {
            if (
              firstValue.toLocaleLowerCase() > secondValue.toLocaleLowerCase()
            ) {
              return 1;
            } else if (
              firstValue.toLocaleLowerCase() < secondValue.toLocaleLowerCase()
            ) {
              return -1;
            } else {
              return 0;
            }
          } else if (sortOrder && sortOrder === "descending") {
            if (
              firstValue.toLocaleLowerCase() < secondValue.toLocaleLowerCase()
            ) {
              return 1;
            } else if (
              firstValue.toLocaleLowerCase() > secondValue.toLocaleLowerCase()
            ) {
              return -1;
            } else {
              return 0;
            }
          }
        }

        return 1;
      });
    } else {
    }
  });

  return GroupByType;
};
