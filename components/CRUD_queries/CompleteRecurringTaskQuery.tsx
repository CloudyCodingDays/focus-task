import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";
import { CalculateNextDueDate } from "../task_functions/CalculateNextDueDate";
import UnassignTaskQuery from "./UnassignTaskQuery";
import InsertCompletedRecurringTaskQuery from "./InsertCompletedRecurringTaskQuery";
import UpdateRecurringTaskDueDateQuery from "./UpdateRecurringTaskDueDateQuery";

const CompleteRecurringTaskQuery = async (taskData: Task, userId: string) => {
  const newDueDate = CalculateNextDueDate(taskData.recurring_type);

  const UpdateDueDateStatus = await UpdateRecurringTaskDueDateQuery(
    taskData,
    userId,
    newDueDate
  );
  if (!UpdateDueDateStatus) return false;

  const InsertCompletedStatus = await InsertCompletedRecurringTaskQuery(
    taskData,
    userId
  );
  if (!InsertCompletedStatus) return false;

  const UnassignStatus = await UnassignTaskQuery(taskData.id, userId);
  if (!UnassignStatus) return false;

  return true;
};

export default CompleteRecurringTaskQuery;
