import { Task } from "@/types/Task";
import { createClient } from "@/utils/supabase/client";

const InsertCompletedRecurringTaskQuery = async (
  taskData: Task,
  userId: string
) => {
  const supabase = createClient();

  //Insert recurring task id and completed into recurring completed table
  const { error } = await supabase.from("completed_recurring_tasks").insert({
    task_id: taskData.id,
    original_due_date: taskData.due_date,
    completed_by: userId,
    completed_at: new Date(),
  });

  if (error) throw new Error(error.message);
};

export default InsertCompletedRecurringTaskQuery;
