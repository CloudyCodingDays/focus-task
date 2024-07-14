import { createClient } from "@/utils/supabase/client";

const AssignTaskQuery = async (taskId: string, userId: string) => {
  const supabase = createClient();

  const { error } = await supabase.from("user_current_task").insert({
    user_id: userId,
    task_id: taskId,
    is_assigned: true,
    is_current: true,
    action_at: new Date(),
  });

  if (error) throw new Error(error.message);
};

export default AssignTaskQuery;
