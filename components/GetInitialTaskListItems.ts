import GetAllTasksforUser from "./task_queries/GetAllTasksforUser";
import GetDueTasks from "./task_queries/GetDueTasks";

export const GetInitialTaskListItems = async (
  isManageMode: boolean,
  userId: string
) => {
  if (isManageMode) {
    return await GetAllTasksforUser(userId);
  } else if (!isManageMode) {
    return await GetDueTasks(userId);
  }
  return [];
};
