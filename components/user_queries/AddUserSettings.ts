import supabaseClient from "@/lib/supabaseClient";
import supabase from "@/lib/supabaseClient";
import { Settings } from "@/types/Setting";
import { Task } from "@/types/Task";

export const AddUserSettings = async (defaultTask: Task, userId: string) => {
  const { error } = await supabaseClient.from("user_settings").insert({
    cat_pic_on_complete: true,
    compact_task_view: false,
    created_at: new Date(Date.now()),
    default_desc: "Description",
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
