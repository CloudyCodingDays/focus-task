import supabaseClient from "@/lib/supabaseClient";

const UnassignTaskQuery = async (taskId: string, userId: string) => {
  const { error } = await supabaseClient
    .from("user_current_task")
    .update({ is_assigned: false, is_current: false, action_at: new Date() })
    .eq("task_id", taskId)
    .eq("user_id", userId)
    .eq("is_current", true)
    .eq("is_assigned", true);

  if (error) throw new Error(error.message);
};

export default UnassignTaskQuery;
