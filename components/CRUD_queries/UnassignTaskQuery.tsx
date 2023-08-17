import supabaseClient from "@/lib/supabaseClient";

const UnassignTaskQuery = async (userId: string) => {
  const { error: OldActiveError } = await supabaseClient
    .from("user_current_task")
    .update({ is_assigned: false, is_current: false, action_at: new Date() })
    .eq("user_id", userId)
    .eq("is_current", true)
    .eq("is_assigned", true);

  if (OldActiveError) throw new Error(OldActiveError.message);
};

export default UnassignTaskQuery;
