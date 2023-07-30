import supabase from "@/lib/supabaseClient";

const GetTasks = async () => {
  const { data, error } = await supabase
    .from("tasks")
    .select("id, name, description");

  if (error) throw new Error(error.message);
  return (data as any) || [];
};

export default GetTasks;
