import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const AddTaskQuery = async (taskData: Task, userId: string) => {
  const { status, error } = await supabaseClient.from("tasks").insert({
    name: taskData.name,
    description: taskData.description,
    is_recurring: taskData.is_recurring,
    recurring_type: taskData.recurring_type,
    priority: taskData.priority,
    due_date: taskData.due_date,
    updated_at: new Date(),
    created_by: userId,
    created_at: new Date(),
    image_path: taskData.image_path,
  });

  if (error) throw new Error(error.message);

  if (status === 201) return true;

  return false;
};

export default AddTaskQuery;
