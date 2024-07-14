import { createClient } from "@/utils/supabase/client";
import { Task } from "@/types/Task";

const GetTaskCountForUser = async (userId: string) => {
  const supabase = createClient();
  const { count: TaskCount, error: TaskCountError } = await supabase
    .from("tasks")
    .select("*", { count: "exact", head: true })
    .eq("created_by", userId);

  if (TaskCountError) throw new Error(TaskCountError.message);

  return TaskCount;
};

export default GetTaskCountForUser;
