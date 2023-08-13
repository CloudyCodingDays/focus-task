import supabaseClient from "@/lib/supabaseClient";

const DeleteTaskQuery = async (taskId: string, userId: string) => {
  const { error: supabaseError } = await supabaseClient
    .from("tasks")
    .delete()
    .eq("id", taskId)
    .eq("created_by", userId);

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

export default DeleteTaskQuery;
