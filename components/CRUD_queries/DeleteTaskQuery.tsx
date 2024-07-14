import { createClient } from "@/utils/supabase/client";

const DeleteTaskQuery = async (taskId: string, userId: string) => {
  const supabase = createClient();

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId)
    .eq("created_by", userId);

  if (error) throw new Error(error.message);
};

export default DeleteTaskQuery;
