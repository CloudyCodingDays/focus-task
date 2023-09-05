import GetAllTasksforUser from "../../../../components/task_queries/GetAllTasksforUser";
import GetDueTasks from "../../../../components/task_queries/GetDueTasks";

export const GetInitialTaskListItems = async (
  userId: string,
  dueDate?: Date,
) => {
  if (dueDate === undefined) {
    return await GetAllTasksforUser(userId);
  } else {
    return await GetDueTasks(userId, dueDate);
  }
};
