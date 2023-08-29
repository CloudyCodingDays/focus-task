import { Task } from "@/types/Task";
import DeleteTaskQuery from "./DeleteTaskQuery";
import InsertCompletedTaskQuery from "./InsertCompletedTaskQuery";

const CompleteTaskQuery = async (taskData: Task, userId: string) => {
  await InsertCompletedTaskQuery(taskData, userId);

  await DeleteTaskQuery(taskData.id, userId);
};

export default CompleteTaskQuery;
