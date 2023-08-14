import supabaseClient from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const CompleteTaskQuery = async (taskData: Task, userId: string) => {
  const { error: currentTaskError } = await supabaseClient
    .from("user_current_task")
    .delete()
    .eq("user_id", userId);

  if (currentTaskError) {
    throw new Error(currentTaskError.message);
  }

  const { error: completedTaskError } = await supabaseClient
    .from("completed_tasks")
    .insert({
      task_id: taskData.id,
      name: taskData.name,
      description: taskData.description,
      completed_by_user_id: userId,
    });

  if (completedTaskError) {
    throw new Error(completedTaskError.message);
  }

  const { error: deleteTaskError } = await supabaseClient
    .from("tasks")
    .delete()
    .eq("id", taskData.id);

  if (deleteTaskError) {
    throw new Error(deleteTaskError.message);
  }
};

export default CompleteTaskQuery;
