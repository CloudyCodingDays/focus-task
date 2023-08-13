import supabaseClient from "@/lib/supabaseClient";

const DeleteTaskQuery = async (taskId: string) => {
  const { error: supabaseError } = await supabaseClient
    .from("tasks")
    .delete()
    .eq("id", taskId);

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

export default DeleteTaskQuery;
