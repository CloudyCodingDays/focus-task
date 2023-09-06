import supabaseClient from "@/lib/supabaseClient";

const DeleteTaskQuery = async (taskId: string, userId: string) => {
  const { error } = await supabaseClient
    .from("tasks")
    .delete()
    .eq("id", taskId)
    .eq("created_by", userId);

  if (error) throw new Error(error.message);
};

export default DeleteTaskQuery;
