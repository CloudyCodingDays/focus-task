import supabaseClient from "@/lib/supabaseClient";
import { AddTaskFormData } from "@/components/AddForm";

const AddTaskQuery = async (taskData: AddTaskFormData, userId: string) => {
  const { error } = await supabaseClient.from("tasks").insert({
    name: taskData.name,
    description: taskData.description,
    is_recurring: taskData.is_recurring,
    recurring_type: taskData.recurring_type,
    priority: taskData.priority,
    due_date: taskData.due_date,
    updated_at: new Date(),
    created_by: userId,
    created_at: new Date(),
  });

  if (error) throw new Error(error.message);
};

export default AddTaskQuery;
