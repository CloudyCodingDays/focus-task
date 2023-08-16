import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetAllTasksforUser = async (userId: string) => {
  const { data: TaskData, error: TaskError } = await supabase
    .from("tasks")
    .select(
      `id, 
      name, 
    description, 
    is_recurring, 
    recurring_type, 
    due_date, 
    priority, 
    created_at,
    created_by,
    image_path,
    updated_at`
    )
    .eq("created_by", userId);

  if (TaskError) throw new Error(TaskError.message);

  return (TaskData as Task[]) || [];
};

export default GetAllTasksforUser;
