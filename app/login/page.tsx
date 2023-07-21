"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Home() {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={true}
      providers={["google"]}
      redirectTo="http://localhost:3000/"
    />
  );
}
