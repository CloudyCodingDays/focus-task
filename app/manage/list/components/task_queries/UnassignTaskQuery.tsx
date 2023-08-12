import supabaseClient from "@/lib/supabaseClient";

const UnassignTaskQuery = async (userId: string) => {
  const { error: supabaseError } = await supabaseClient
    .from("user_current_task")
    .delete()
    .eq("user_id", userId);

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

export default UnassignTaskQuery;
