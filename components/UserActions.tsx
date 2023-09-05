import supabase from "@/lib/supabaseClient";

export const UserSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
};

export const UserSignOut = async () => {
  const { error } = await supabase.auth.signOut();
};

export const UserRegister = async (formEmail: string, formPassword: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: formEmail,
    password: formPassword,
  });

  return data;
};
