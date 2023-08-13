import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const EditTaskQuery = async (taskData: Task) => {
  const { error: supabaseError } = await supabaseClient
    .from("tasks")
    .update({
      name: taskData.name,
      description: taskData.description,
      is_recurring: taskData.is_recurring,
      recurring_type: taskData.recurring_type,
      priority: taskData.priority,
      due_date: taskData.due_date,
      updated_at: new Date(),
      created_by: taskData.created_by,
      created_at: taskData.created_at,
      image_path: taskData.image_path,
    })
    .eq("id", taskData.id);

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

export default EditTaskQuery;
