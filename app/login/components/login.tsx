"use client";
import supabase from "@/lib/supabaseClient";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { session } = useSessionContext();

  const HandleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    router.refresh();
  };

  const HandleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "plyn8750@gmail.com",
      password: "123456",
    });
    router.refresh();
  };

  return (
    <div>
      {!session ? (
        <div className="w-full">
          <div className="break-words mb-4">
            Login as Authenticated Guest, Mr. touchy fingers
          </div>
          <button
            onClick={HandleLogin}
            className="hover:bg-green-500 hover:text-white bg-green-300 text-green-600  mx-auto w-full py-2"
          >
            Login
          </button>
        </div>
      ) : (
        <button
          onClick={HandleLogout}
          className="hover:border-green-300 hover:text-green-300 border-green-500 text-green-500 border-2 mx-auto w-full py-2"
        >
          logout
        </button>
      )}
    </div>
  );
};

export default Login;
