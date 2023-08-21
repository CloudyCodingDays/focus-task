import GetAllTasksforUser from "../task_queries/GetAllTasksforUser";
import GetDueTasks from "../task_queries/GetDueTasks";

export const GetInitialTaskListItems = async (
  userId: string,
  dueDate?: Date
) => {
  if (dueDate === undefined) {
    return await GetAllTasksforUser(userId);
  } else {
    return await GetDueTasks(userId, dueDate);
  }
  return [];
};
