import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskCountForUser = async (userId: string) => {
  const { count: TaskCount, error: TaskCountError } = await supabase
    .from("tasks")
    .select("*", { count: "exact", head: true })
    .eq("created_by", userId);

  if (TaskCountError) throw new Error(TaskCountError.message);

  return TaskCount;
};

export default GetTaskCountForUser;
