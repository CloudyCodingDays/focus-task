import { User } from "@supabase/auth-helpers-nextjs";
import { useSessionContext, useUser } from "@supabase/auth-helpers-react";
import { createContext, useState, useEffect, useContext } from "react";

import { Database } from "@/types/supabase";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);

  const value = {
    accessToken,
    user,
    isLoading: isLoadingUser || isLoadingData,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUserInfo = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within MyUserContextProvider");
  }
  return context;
};
