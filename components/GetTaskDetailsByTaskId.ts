import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskDetailsByTaskId = async (TaskId: string) => {
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
      image_path`
    )
    .eq("id", TaskId);

  if (TaskDetailsError) throw new Error(TaskDetailsError.message);

  return (TaskDetailsData as Task[]) || [];
};

export default GetTaskDetailsByTaskId;
