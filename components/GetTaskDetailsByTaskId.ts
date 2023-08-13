import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskDetailsByTaskId = async (TaskId: string, userId: string) => {
  const { data: TaskDetailsData, error: TaskDetailsError } = await supabase
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
    .eq("id", TaskId)
    .eq("created_by", userId);

  if (TaskDetailsError) throw new Error(TaskDetailsError.message);

  return (TaskDetailsData as Task[]) || [];
};

export default GetTaskDetailsByTaskId;
