import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const EditTaskQuery = async (taskData: Task) => {
  const { error: supabaseError } = await supabaseClient
    .from("tasks")
    .update({
      created_at: new Date(),
      created_by: taskData.created_by,
      description: taskData.description,
      due_date: new Date(), //taskData.due_date
      image_path: taskData.image_path,
      is_recurring: taskData.is_recurring,
      name: taskData.name,
      priority: taskData.priority,
      recurring_type: taskData.recurring_type,
    })
    .eq("id", taskData.id);

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

export default EditTaskQuery;
