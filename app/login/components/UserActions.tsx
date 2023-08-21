import supabase from "@/lib/supabaseClient";

export const isUserLoggedIn = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);

  if (data.session === null) {
    console.log("not logged in");
  }

  console.log(data);
};

export const UserSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
};

export const UserSignOut = async () => {
  const { error } = await supabase.auth.signOut();
};

export const UserRegister = async (
  formEmail: string,
  formPassword: string,
  formFirstName: string,
  formLastName: string
) => {
  const { error } = await supabase.auth.signUp({
    email: formEmail,
    password: formPassword,
    options: { data: { firstName: formFirstName, lastName: formLastName } },
  });
};
