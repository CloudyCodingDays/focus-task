import toast from "react-hot-toast";
import supabase from "@/lib/supabaseClient";
import { UserSettingsFormData } from "@/app/settings/components/UserSettings";

export const UpdateUserSettings = async (
  userSettingFormData: UserSettingsFormData,
  userId?: string,
) => {
  const fName = userSettingFormData.fName;
  const lName = userSettingFormData.lName;
  const email = userSettingFormData.email;
  const password = userSettingFormData.password;

  if (userId === undefined) {
    toast("User ID not found");
    throw new Error("Something went wrong.");
  }

  if (email.length !== 0 && password.length !== 0) {
    const { data, error } = await supabase.auth.updateUser({
      email: email,
      password: password,
    });
    if (error) throw new Error(error.message);
  }

  const { error: UserError } = await supabase
    .from("users")
    .update({
      first_name: fName,
      last_name: lName,
    })
    .eq("id", userId);
  if (UserError) throw new Error(UserError.message);
};
