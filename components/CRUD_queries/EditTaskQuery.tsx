import supabaseClient from "@/lib/supabaseClient";
import { EditTaskFormData } from "@/components/EditTaskForm";

const EditTaskQuery = async (taskData: EditTaskFormData, userId: string) => {
  const { error } = await supabaseClient
    .from("tasks")
    .update({
      name: taskData.name,
      description: taskData.description,
      is_recurring: taskData.is_recurring,
      recurring_type: taskData.is_recurring ? taskData.recurring_type : "",
      priority: taskData.priority,
      due_date: taskData.due_date,
      updated_at: new Date(),
      created_by: userId,
      created_at: taskData.created_at,
    })
    .eq("id", taskData.id)
    .eq("created_by", userId);

  if (error) throw new Error(error.message);
};

export default EditTaskQuery;
