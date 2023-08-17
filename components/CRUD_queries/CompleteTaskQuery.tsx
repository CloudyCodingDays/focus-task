import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";
import { CalculateNextDueDate } from "../CalculateNextDueDate";

const CompleteTaskQuery = async (taskData: Task, userId: string) => {
  //Unassign task from user
  const { error: OldActiveError } = await supabaseClient
    .from("user_current_task")
    .update({ is_assigned: false, is_current: false, action_at: new Date() })
    .eq("user_id", userId)
    .eq("is_current", true)
    .eq("is_assigned", true);

  if (OldActiveError) throw new Error(OldActiveError.message);

  //don't delete from main tasks table if it is a recurring task but reset the due date instead
  if (taskData.is_recurring) {
    const newDueDate = CalculateNextDueDate(taskData.recurring_type);

    const { error: recurringTaskError } = await supabaseClient
      .from("tasks")
      .update({ due_date: newDueDate, updated_at: new Date() })
      .eq("created_by", userId)
      .eq("id", taskData.id);

    if (recurringTaskError) throw new Error(recurringTaskError.message);

    const { error: RecurringCompletedError } = await supabaseClient
      .from("completed_recurring_tasks")
      .insert({
        task_id: taskData.id,
        original_due_date: taskData.due_date,
        completed_by: userId,
        completed_at: new Date(),
      });

    if (RecurringCompletedError) {
      throw new Error(RecurringCompletedError.message);
    }
  } else {
    //Insert task data into completed table to keep data in logs
    const { error: completedTaskError } = await supabaseClient
      .from("completed_tasks")
      .insert({
        task_id: taskData.id,
        name: taskData.name,
        description: taskData.description,
        priority: taskData.priority,
        due_date: taskData.due_date,
        completed_by: userId,
      });

    if (completedTaskError) {
      throw new Error(completedTaskError.message);
    }

    const { error: deleteTaskError } = await supabaseClient
      .from("tasks")
      .delete()
      .eq("id", taskData.id)
      .eq("created_by", userId);

    if (deleteTaskError) {
      throw new Error(deleteTaskError.message);
    }
  }
};

export default CompleteTaskQuery;
