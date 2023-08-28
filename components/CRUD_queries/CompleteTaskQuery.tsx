import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";
import { CalculateNextDueDate } from "../task_functions/CalculateNextDueDate";
import InsertCompletedTaskQuery from "./InsertCompletedTaskQuery";
import DeleteTaskQuery from "./DeleteTaskQuery";

const CompleteTaskQuery = async (taskData: Task, userId: string) => {
  await InsertCompletedTaskQuery(taskData, userId);

  await DeleteTaskQuery(taskData.id, userId);
};

export default CompleteTaskQuery;
