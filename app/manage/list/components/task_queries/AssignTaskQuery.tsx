import supabaseClient from "@/lib/supabaseClient";

const AssignTaskQuery = async (taskId: string, userId: string) => {
  const { error: supabaseError } = await supabaseClient
    .from("user_current_task")
    .insert({
      user_id: userId,
      task_id: taskId,
    });

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

export default AssignTaskQuery;
