import { Task } from "@/types/Task";

export const SortInitialTaskListItems = (
  taskList: Task[],
  isManageMode: boolean
) => {
  let priorities = ["high", "medium", "low"];
  if (!isManageMode)
    return taskList.sort(
      (a, b) =>
        priorities.indexOf(a.priority.toLocaleLowerCase()) -
        priorities.indexOf(b.priority.toLocaleLowerCase())
    );
  return taskList;
};
