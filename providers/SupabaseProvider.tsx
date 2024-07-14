"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@/utils/supabase/client";

interface SupaBaseProviderProps {
  children: React.ReactNode;
}

const SupaBaseProvider: React.FC<SupaBaseProviderProps> = ({ children }) => {
  const supabase = createClient();
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
};

export default SupaBaseProvider;
