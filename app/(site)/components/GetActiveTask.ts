import supabase from "@/lib/supabaseClient";

const GetActiveTask = async (id: string) => {
  const { data: ActiveTaskData, error: ActiveTaskError } = await supabase
    .from("user_current_task")
    .select("id, user_id, task_id")
    .eq("user_id", id);
  if (ActiveTaskError) throw new Error(ActiveTaskError.message);

  /* ActiveTaskData.map(async (item) => {
    const { data, error } = await supabase
      .from("tasks")
      .select("id, name, description")
      .eq("id", item.task_id);
    if (error) throw new Error(error.message);
    return (data as any) || [];
  }); */

  return (ActiveTaskData as any) || [];
};

export default GetActiveTask;
