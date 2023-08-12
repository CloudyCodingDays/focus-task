import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const AddTaskQuery = async (taskData: Task, userId: string) => {
  const { error: supabaseError } = await supabaseClient.from("tasks").insert({
    created_at: new Date(),
    created_by: userId,
    description: taskData.description,
    due_date: new Date(), //taskData.due_date
    image_path: taskData.image_path,
    is_recurring: taskData.is_recurring,
    name: taskData.name,
    priority: taskData.priority,
    recurring_type: taskData.recurring_type,
  });

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

export default AddTaskQuery;
