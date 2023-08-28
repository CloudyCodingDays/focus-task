import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";
import { CalculateNextDueDate } from "../task_functions/CalculateNextDueDate";
import UnassignTaskQuery from "./UnassignTaskQuery";
import InsertCompletedRecurringTaskQuery from "./InsertCompletedRecurringTaskQuery";
import UpdateRecurringTaskDueDateQuery from "./UpdateRecurringTaskDueDateQuery";

const CompleteRecurringTaskQuery = async (taskData: Task, userId: string) => {
  const newDueDate = CalculateNextDueDate(
    taskData.recurring_type,
    taskData.due_date
  );
  console.log(newDueDate);
  await UpdateRecurringTaskDueDateQuery(taskData, userId, newDueDate);

  await InsertCompletedRecurringTaskQuery(taskData, userId);

  await UnassignTaskQuery(taskData.id, userId);
};

export default CompleteRecurringTaskQuery;
