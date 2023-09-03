import { Task } from "@/types/Task";

export const SortInitialTaskListItems = (taskList: Task[]) => {
  let priorities = ["high", "medium", "low"];

  return taskList.sort(
    (a, b) =>
      priorities.indexOf(a.priority.toLocaleLowerCase()) -
      priorities.indexOf(b.priority.toLocaleLowerCase()),
  );
};
