import { Task } from "@/types/Task";

export const SortInitialTaskListItems = (
  taskList: Task[],
  sortTasks: boolean
) => {
  let priorities = ["high", "medium", "low"];
  if (sortTasks)
    return taskList.sort(
      (a, b) =>
        priorities.indexOf(a.priority.toLocaleLowerCase()) -
        priorities.indexOf(b.priority.toLocaleLowerCase())
    );
  return taskList;
};
