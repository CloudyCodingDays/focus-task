import supabase from "@/lib/supabaseClient";

const GetTasks = async () => {
  const { data, error } = await supabase.from("tasks").select("id, name");

  if (error) throw new Error(error.message);
  console.log(data);
  return (data as any) || [];
};

export default GetTasks;
