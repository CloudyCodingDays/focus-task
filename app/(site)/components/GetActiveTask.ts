import supabase from "@/lib/supabaseClient";

const GetActiveTask = async (id: string) => {
  const { data: ActiveTaskData, error: ActiveTaskError } = await supabase
    .from("user_current_task")
    .select("id, user_id, task_id")
    .eq("user_id", id);
  if (ActiveTaskError) throw new Error(ActiveTaskError.message);

  return (ActiveTaskData as any) || [];
};

export default GetActiveTask;
