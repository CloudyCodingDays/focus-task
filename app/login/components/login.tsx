"use client";
import supabase from "@/lib/supabaseClient";
import { data } from "autoprefixer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";

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
        <button onClick={HandleLogin}>
          Login as Authenticated Guest, Mr. touchy fingers
        </button>
      ) : (
        <button onClick={HandleLogout} className="border-4">
          logout
        </button>
      )}
    </div>
  );
};

export default Login;
