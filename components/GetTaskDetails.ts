import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskDetails = async (id: string, type?: string) => {
  let UserTaskId = id;
  if (type !== undefined) {
    if (type.trim() == "user") {
      const { data: ActiveTaskData, error: ActiveTaskError } = await supabase
        .from("user_current_task")
        .select("id, user_id, task_id")
        .eq("user_id", id);

      if (ActiveTaskError) throw new Error(ActiveTaskError.message);

      if (ActiveTaskData === null) {
        throw new Error("Task Data could not be retreived");
      }
      UserTaskId = ActiveTaskData[0].task_id;
    } else {
      throw new Error("could not get data");
    }
  }

  const { data: ActiveTaskDetailsData, error: ActiveTaskDetailsError } =
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
      image_path`
      )
      .eq("id", UserTaskId);

  if (ActiveTaskDetailsError) throw new Error(ActiveTaskDetailsError.message);

  return (ActiveTaskDetailsData as Task[]) || [];
};

export default GetTaskDetails;
