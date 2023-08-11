import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskDetails = async (id?: string, type?: string) => {
  if (id === undefined && !type) {
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
    image_path`
      );

    if (TaskError) throw new Error(TaskError.message);

    return (TaskData as Task[]) || [];
  } else {
    let UserTaskId = id;
    if (type !== undefined) {
      if (type.trim() == "user") {
        const { data: ActiveTaskData, error: ActiveTaskError } = await supabase
          .from("user_current_task")
          .select("id, user_id, task_id")
          .eq("user_id", id);

        if (ActiveTaskError) throw new Error(ActiveTaskError.message);

        if (ActiveTaskData.length === 0) {
          return [];
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
  }
};

export default GetTaskDetails;
