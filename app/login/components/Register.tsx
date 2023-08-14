import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const HandleRegister = async () => {
  const supabase = createClientComponentClient();
  let { data, error } = await supabase.auth.signUp({
    email: "plyn8750@gmail.com",
    password: "123456",
  });

  if (error) console.log(error.message);
};
const Register = () => {
  return <button onClick={HandleRegister}>Register</button>;
};

export default Register;
