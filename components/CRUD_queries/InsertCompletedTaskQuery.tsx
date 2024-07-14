import { Task } from "@/types/Task";
import { createClient } from "@/utils/supabase/client";

const InsertCompletedTaskQuery = async (taskData: Task, userId: string) => {
  const supabase = createClient();

  //Insert task data into completed table to keep data in logs
  const { error } = await supabase.from("completed_tasks").insert({
    task_id: taskData.id,
    name: taskData.name,
    description: taskData.description,
    priority: taskData.priority,
    due_date: taskData.due_date,
    completed_by: userId,
  });

  if (error) throw new Error(error.message);
};

export default InsertCompletedTaskQuery;
