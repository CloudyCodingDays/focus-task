import supabase from "@/lib/supabaseClient";
import toast from "react-hot-toast";

export const UserSignIn = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) toast.error(error.message);
};

export const UserSignOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) toast.error(error.message);

  toast.success("Signed out successfully!");
};

export const UserRegister = async (formEmail: string, formPassword: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: formEmail,
    password: formPassword,
  });
  if (error) toast.error(error.message);
  return data;
};
