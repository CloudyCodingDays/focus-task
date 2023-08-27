import { Task } from "@/types/Task";
import supabaseClient from "@/lib/supabaseClient";

const InsertCompletedTaskQuery = async (taskData: Task, userId: string) => {
  //Insert task data into completed table to keep data in logs
  const { status, error } = await supabaseClient
    .from("completed_tasks")
    .insert({
      task_id: taskData.id,
      name: taskData.name,
      description: taskData.description,
      priority: taskData.priority,
      due_date: taskData.due_date,
      completed_by: userId,
    });

  if (error) throw new Error(error.message);

  if (status === 201) return true;

  return false;
};

export default InsertCompletedTaskQuery;
