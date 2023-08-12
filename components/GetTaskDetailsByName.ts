import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskDetailsByName = async (name: string) => {
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
      image_path`
    )
    .ilike("name", `%${name}%`);

  if (NameFilterError) throw new Error(NameFilterError.message);

  return (NameFilterData as Task[]) || [];
};

export default GetTaskDetailsByName;
