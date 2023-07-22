import supabase from "@/lib/supabaseClient";

const GetTasks = async () => {
  const { data, error } = await supabase.from("tasks").select();

  return (data as any) || [];
};

export default GetTasks;
