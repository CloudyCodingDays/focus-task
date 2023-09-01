import toast from "react-hot-toast";
import {useQueryClient} from "react-query";
import {FormEvent} from "react";

export const UpdateDisplaySettings = async (
    e: FormEvent<HTMLFormElement>,
    userId?: string
) => {
  const queryClient = useQueryClient();
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const fName = formData.get("fName") as string;
  const lName = formData.get("lName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (userId === undefined) {
    toast("User ID not found")
    throw new Error("Something went wrong.")
  }

  /*await toast.promise(UpdateGeneralSettingsQuery(description, priority, isRecurring, recurringType, taskDue, catPicture, userId), {
    loading: "Completing Task...",
    success: "Task Completed!",
    error: "Unable to Complete Task. Please try again.",
  });
*/
  await queryClient.resetQueries("Settings");

};
