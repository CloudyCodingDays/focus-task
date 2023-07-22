"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Login from "./components/login";

export default function Home() {
  const supabase = createClientComponentClient();

  return <Login />;
}
