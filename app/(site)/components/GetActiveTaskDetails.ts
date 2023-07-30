import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/supabase";

const GetActiveTaskDetails = async (task: Task[]) => {
  let taskData;
  task.map(async (item) => {
    const { data, error } = await supabase
      .from("tasks")
      .select("id, name, description")
      .eq("id", item.id);
    if (error) throw new Error(error.message);
    taskData = data;
  });
  return (taskData as any) || [];
};

export default GetActiveTaskDetails;
