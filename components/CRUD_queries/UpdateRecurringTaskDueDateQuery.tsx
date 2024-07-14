import { createClient } from "@/utils/supabase/client";
import { Task } from "@/types/Task";
import { CalculateNextDueDate } from "../task_functions/CalculateNextDueDate";
import UnassignTaskQuery from "./UnassignTaskQuery";
import InsertCompletedRecurringTaskQuery from "./InsertCompletedRecurringTaskQuery";

const UpdateRecurringTaskDueDateQuery = async (
  taskData: Task,
  userId: string,
  newDueDate: string
) => {
  const supabase = createClient();

  //Update Due date to new due date based on recurring type
  const { error } = await supabase
    .from("tasks")
    .update({ due_date: newDueDate, updated_at: new Date() })
    .eq("created_by", userId)
    .eq("id", taskData.id);

  if (error) throw new Error(error.message);
};

export default UpdateRecurringTaskDueDateQuery;
