import toast from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import { UserSettingsFormData } from "@/app/settings/components/UserSettings";
import { User } from "@supabase/auth-helpers-nextjs";

export const UpdateUserSettings = async (
  userSettingFormData: UserSettingsFormData,
  user: User | null
) => {
  const supabase = createClient();

  const fName = userSettingFormData.fName;
  const lName = userSettingFormData.lName;
  const email = userSettingFormData.email;
  const password = userSettingFormData.password;

  if (user === undefined) {
    toast("User ID not found");
    throw new Error("Something went wrong.");
  }

  if (email === user?.email) {
    toast("Email is the same as current so no changes made to email");
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
    .eq("id", user?.id);
  if (UserError) throw new Error(UserError.message);
};
