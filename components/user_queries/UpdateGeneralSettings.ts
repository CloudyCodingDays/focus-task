import toast from "react-hot-toast";
import supabase from "@/lib/supabaseClient";
import { GeneralSettingsFormData } from "@/app/settings/components/GeneralSettings";

export const UpdateGeneralSettings = async (
  generalSettingsFormData: GeneralSettingsFormData,
  userId?: string,
) => {
  const description = generalSettingsFormData.description;
  const priority = generalSettingsFormData.priority;
  const isRecurring = generalSettingsFormData.is_recurring;
  const recurringType = generalSettingsFormData.recurring_type;
  const taskDue = generalSettingsFormData.default_due_date;
  const catPicture = generalSettingsFormData.catPicture;

  if (userId === undefined) {
    toast("User ID not found");
    throw new Error("Something went wrong.");
  }

  const { error } = await supabase
    .from("user_settings")
    .update({
      default_desc: description,
      default_due_date: taskDue,
      default_priority: priority,
      default_recurring: isRecurring,
      default_recurring_type: recurringType,
    })
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  const { error: CatError } = await supabase
    .from("user_settings")
    .update({
      cat_pic_on_complete: catPicture,
    })
    .eq("user_id", userId);
  if (CatError) throw new Error(CatError.message);
};
