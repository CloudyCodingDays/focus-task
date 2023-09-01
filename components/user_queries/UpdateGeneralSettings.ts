import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { FormEvent } from "react";
import supabase from "@/lib/supabaseClient";

export const UpdateGeneralSettings = async (
  e: FormEvent<HTMLFormElement>,
  userId?: string,
) => {
  const queryClient = useQueryClient();
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;
  const isRecurring = formData.get("is_recurring") as string;
  const recurringType = formData.get("recurring_type") as string;
  const taskDue = formData.get("default_task_due") as string;
  const catPicture = formData.get("catPicture") as string;

  console.log(catPicture);

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

  await queryClient.resetQueries("Settings");
};
