"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import NavBarLogin from "./NavBarLogin";
import NavBarLogo from "./NavBarLogo";
import NavBarMenu from "./NavBarMenu";
import Routes from "./Routes";
import useThemeContext from "@/hooks/useThemeContext";
import NavTheme from "./NavTheme";
import React from "react";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const { user } = useUserInfo();
  const { color } = useThemeContext();
  return (
    <div className={"bg-neutralBg text-onNeutralBg h-full " + `theme-${color}`}>
      <div className="flex flex-col md:min-h-screen">
        <div className="bg-main flex flex-row w-full justify-between items-center px-2 pt-2 mx-auto md:px-12">
          {user ? <NavBarMenu user={user} /> : <div></div>}
          <NavBarLogo />
          <div className="flex">
            {user ? <NavTheme /> : <div></div>}
            <NavBarLogin />
          </div>
        </div>
        {user ? (
          <div className="flex flex-row md:flex-auto">
            <div className="lg:block hidden bg-mainBg pt-4">
              <Routes user={user} />
            </div>
            <div className="w-full">{children}</div>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
