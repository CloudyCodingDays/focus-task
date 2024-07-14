import { createClient } from "@/utils/supabase/client";
import { Task } from "@/types/Task";

const GetDueTasks = async (userId: string, dueDate: Date) => {
  const supabase = createClient();
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
    .eq("due_date", dueDate.toDateString());

  if (TaskError) throw new Error(TaskError.message);

  return (TaskData as Task[]) || [];
};

export default GetDueTasks;
