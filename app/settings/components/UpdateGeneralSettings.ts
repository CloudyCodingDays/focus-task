import toast from "react-hot-toast";
import {useQueryClient} from "react-query";
import {UpdateGeneralSettingsQuery} from "@/components/user_queries/UpdateGeneralSettingsQuery";
import {FormEvent} from "react";

export const UpdateGeneralSettings = async (
    e: FormEvent<HTMLFormElement>,
    userId?: string
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

  console.log(catPicture)

  if (userId === undefined) {
    toast("User ID not found")
    throw new Error("Something went wrong.")
  }

  await toast.promise(UpdateGeneralSettingsQuery(description, priority, isRecurring, recurringType, taskDue, catPicture, userId), {
    loading: "Completing Task...",
    success: "Task Completed!",
    error: "Unable to Complete Task. Please try again.",
  });

  await queryClient.resetQueries("Settings");

};
