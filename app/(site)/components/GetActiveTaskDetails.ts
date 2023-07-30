import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/supabase";

const GetActiveTaskDetails = async (task: any) => {
  let taskId;
  if (task.length > 0) {
    task.map(async (item: any) => {
      taskId = item.task_id;
    });
    const { data, error } = await supabase
      .from("tasks")
      .select("id, name, description")
      .eq("id", taskId);

    if (error) throw new Error(error.message);
    return (data as any) || [];
  } else {
    return [];
  }
};

export default GetActiveTaskDetails;
