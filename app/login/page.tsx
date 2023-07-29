"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import supabase from "@/lib/supabaseClient";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (user?.id !== undefined) router.push("/manage/list");
  }, [router, user?.id]);

  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
}
