import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";
import { CalculateNextDueDate } from "../task_functions/CalculateNextDueDate";
import InsertCompletedTaskQuery from "./InsertCompletedTaskQuery";
import DeleteTaskQuery from "./DeleteTaskQuery";

const CompleteTaskQuery = async (taskData: Task, userId: string) => {
  const InsertCompletedStatus = await InsertCompletedTaskQuery(
    taskData,
    userId
  );
  if (!InsertCompletedStatus) return false;

  const DeleteStatus = await DeleteTaskQuery(taskData.id, userId);
  if (!DeleteStatus) return false;

  return true;
};

export default CompleteTaskQuery;
