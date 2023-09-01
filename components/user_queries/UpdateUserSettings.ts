import toast from "react-hot-toast";
import { FormEvent } from "react";
import supabase from "@/lib/supabaseClient";

export const UpdateUserSettings = async (
  e: FormEvent<HTMLFormElement>,
  userId?: string,
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const fName = formData.get("fName") as string;
  const lName = formData.get("lName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (userId === undefined) {
    toast("User ID not found");
    throw new Error("Something went wrong.");
  }
  if (email.length !== 0 && password.length !== 0) {
    const { data, error } = await supabase.auth.updateUser({
      email: email,
      password: password,
    });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  /*await toast.promise(UpdateGeneralSettingsQuery(description, priority, isRecurring, recurringType, taskDue, catPicture, userId), {
                        loading: "Completing Task...",
                        success: "Task Completed!",
                        error: "Unable to Complete Task. Please try again.",
                      });
                    */
};
