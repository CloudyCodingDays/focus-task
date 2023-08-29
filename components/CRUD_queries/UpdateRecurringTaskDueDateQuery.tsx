import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const UpdateRecurringTaskDueDateQuery = async (
  taskData: Task,
  userId: string,
  newDueDate: string
) => {
  //Update Due date to new due date based on recurring type
  const { error } = await supabaseClient
    .from("tasks")
    .update({ due_date: newDueDate, updated_at: new Date() })
    .eq("created_by", userId)
    .eq("id", taskData.id);

  if (error) throw new Error(error.message);
};

export default UpdateRecurringTaskDueDateQuery;
