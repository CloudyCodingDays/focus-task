import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskDetailsByDesc = async (desc: string) => {
  const { data: NameFilterData, error: NameFilterError } = await supabase
    .from("tasks")
    .select(
      `id, 
        name, 
      description, 
      is_recurring, 
      recurring_type, 
      due_date, 
      priority, 
      created_at,
      created_by,
      image_path,
      updated_at`
    )
    .ilike("description", `%${desc}%`);

  if (NameFilterError) throw new Error(NameFilterError.message);

  return (NameFilterData as Task[]) || [];
};

export default GetTaskDetailsByDesc;
