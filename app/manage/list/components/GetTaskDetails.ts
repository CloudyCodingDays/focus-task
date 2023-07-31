import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/supabase";

const GetTaskDetails = async (id: string) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("id, name, description")
    .eq("id", id);

  if (error) throw new Error(error.message);
  return (data as any) || [];
};

export default GetTaskDetails;
