import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetDueTasks = async (userId: string) => {
  const tomorrowDate = new Date(Date.now());
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

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
    .eq("created_by", userId)
    .lte("due_date", tomorrowDate);

  if (TaskError) throw new Error(TaskError.message);

  return (TaskData as Task[]) || [];
};

export default GetDueTasks;
