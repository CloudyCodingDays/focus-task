import supabaseClient from "@/lib/supabaseClient";
import supabase from "@/lib/supabaseClient";
import { Settings } from "@/types/Setting";
import { Task } from "@/types/Task";

export const AddNameForUser = async (fname: string, lname: string) => {
  const { error } = await supabaseClient.from("users").update({
    first_name: fname,
    last_name: lname,
  });

  if (error) throw new Error(error.message);
};
