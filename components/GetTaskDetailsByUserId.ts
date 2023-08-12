import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskDetailsByUserId = async (userId: string) => {
  const { data: UserTaskData, error: UserTaskError } = await supabase
    .from("user_current_task")
    .select("id, user_id, task_id")
    .eq("user_id", userId);

  if (UserTaskError) throw new Error(UserTaskError.message);

  if (UserTaskData.length === 0) {
    return [];
  }

  let UserTaskId = UserTaskData[0].task_id;

  const { data: UserTaskDetailsData, error: UserTaskDetailsError } =
    await supabase
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
      image_path`
      )
      .eq("id", UserTaskId);

  if (UserTaskDetailsError) throw new Error(UserTaskDetailsError.message);

  return UserTaskDetailsData as Task[];
};

export default GetTaskDetailsByUserId;
