import { createClient } from "@/utils/supabase/client";
import { Settings } from "@/types/Setting";

export const GetSettings = async (userId: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("user_settings")
    .select(
      `id, 
        user_id, 
      compact_task_view, 
      default_desc,
      default_due_date,
      default_priority,
      default_recurring,
      default_recurring_type,
      home_image, 
      cat_pic_on_complete, 
      created_at, 
      updated_at`
    )
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return (data as Settings[]) || [];
};
