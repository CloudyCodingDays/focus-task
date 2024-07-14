import { createClient } from "@/utils/supabase/client";
import { Task } from "@/types/Task";

export const AddDefaultUserSettings = async (
  defaultTask: Task,
  userId: string
) => {
  const supabase = createClient();
  const { error } = await supabase.from("user_settings").insert({
    cat_pic_on_complete: true,
    compact_task_view: false,
    created_at: new Date(Date.now()),
    default_desc:
      "Default Task Description - This can be changed in General Settings",
    default_due_date: new Date(Date.now()),
    default_priority: "Medium",
    default_recurring: "true",
    default_recurring_type: "Daily",
    home_image: "",
    updated_at: new Date(Date.now()),
    user_id: userId,
  });

  if (error) throw new Error(error.message);
};
