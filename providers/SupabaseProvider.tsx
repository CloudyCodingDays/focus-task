"use client";

import { useState } from "react";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import supabase from "@/lib/supabaseClient";

interface SupaBaseProviderProps {
  children: React.ReactNode;
}

const SupaBaseProvider: React.FC<SupaBaseProviderProps> = ({ children }) => {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
};

export default SupaBaseProvider;
