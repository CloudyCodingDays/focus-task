"use client";
import supabase from "@/lib/supabaseClient";

const HandleLogin = async () => {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession(); //await supabase.auth.getUser();
  if (sessionData.session === null) {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: "plyn8750@gmail.com",
      password: "123456",
    });
    if (error) console.log(error.message);
    console.log(JSON.stringify(data, null, 2));
  } else {
    console.log(sessionData);
  }
};
const Login = () => {
  return (
    <div>
      <div></div>
      <button onClick={HandleLogin}>Login</button>
    </div>
  );
};

export default Login;
