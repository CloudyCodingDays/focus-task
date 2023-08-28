import supabaseClient from "@/lib/supabaseClient";

const DeleteTaskQuery = async (taskId: string, userId: string) => {
  const { status, error } = await supabaseClient
    .from("tasks")
    .delete()
    .eq("id", taskId)
    .eq("created_by", userId);

  if (error) throw new Error(error.message);

  if (status === 204) return true;

  return false;
};

export default DeleteTaskQuery;
