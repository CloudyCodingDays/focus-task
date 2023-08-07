import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";
import { el } from "date-fns/locale";

const GetActiveTask = async (id: string) => {
  const { data: ActiveTaskData, error: ActiveTaskError } = await supabase
    .from("user_current_task")
    .select("id, user_id, task_id")
    .eq("user_id", id);

  if (ActiveTaskError) throw new Error(ActiveTaskError.message);

  if (ActiveTaskData !== null) {
    const { data: ActiveTaskDetailsData, error: ActiveTaskDetailsError } =
      await supabase
        .from("tasks")
        .select(
          `name, 
      description, 
      is_recurring, 
      recurring_type, 
      due_date, 
      priority, 
      created_at,
      image_path`
        )
        .eq("id", ActiveTaskData[0].task_id);

    if (ActiveTaskDetailsError) throw new Error(ActiveTaskDetailsError.message);

    return (ActiveTaskDetailsData as Task[]) || [];
  } else {
    throw new Error("could not get data");
  }
};

export default GetActiveTask;
