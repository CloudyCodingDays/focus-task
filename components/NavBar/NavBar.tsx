"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import NavBarLogin from "./NavBarLogin";
import NavBarLogo from "./NavBarLogo";
import NavBarMenu from "./NavBarMenu";
import Routes from "./Routes";
import { useState } from "react";
import useThemeContext from "@/hooks/useThemeContext";
import NavTheme from "./NavTheme";
import { GetThemeStyle } from "../GetThemeStyle";
import NavMode from "./NavMode";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const { user } = useUserInfo();
  const { color, setColor, mode, setMode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);
  return (
    <div className={"bg-neutralBg " + themeStyle}>
      <div className="flex flex-col md:min-h-screen">
        <div className="bg-main flex flex-row w-full justify-between items-center px-2 pt-2 mx-auto md:px-12">
          <NavBarMenu user={user} />
          <NavBarLogo />
          <div className="flex">
            <NavMode />
            <NavTheme />
            <NavBarLogin />
          </div>
        </div>
        <div className="flex flex-row md:flex-auto">
          <div className="md:block hidden bg-mainBg pt-4">
            <Routes user={user} />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
