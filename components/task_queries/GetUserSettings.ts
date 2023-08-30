import supabase from "@/lib/supabaseClient";
import { Settings } from "@/types/Setting";
export const GetUserSettings = async (userId: string) => {
  const { data, error } = await supabase
    .from("user_settings")
    .select(
      `id, 
        user_id, 
      compact_task_view, 
      home_image, 
      cat_pic_on_complete, 
      created_at, 
      updated_at`
    )
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return (data as Settings[]) || [];
};
