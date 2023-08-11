"use client";
import NavBarMenu from "./NavBarMenu";
import NavBarLogo from "./NavBarLogo";
import NavBarLogin from "./NavBarLogin";
import MenuImage from "@/icons/menu.png";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        //Icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        //Icon: BiSearch,
        label: "Manage",
        active: pathname === "/manage/list",
        href: "/manage/list",
      },
      {
        //Icon: BiSearch,
        label: "Settings",
        active: pathname === "/setting",
        href: "/setting",
      },
    ],
    [pathname]
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-full">
      <div className="flex flex-row border-b-2">
        <button className="text-md mx-4" onClick={toggleMenu}>
          <Image
            src={MenuImage}
            width="20"
            height="20"
            alt="Hamburger Menu Icon"
          ></Image>
        </button>
        <div className="flex flex-row justify-between items-baseline px-4 mx-auto w-full">
          {/* <NavBarMenu /> */}
          <NavBarLogo />
          <NavBarLogin />
        </div>
      </div>
      <div className="flex flex-row w-full h-full">
        <div
          className={`${isOpen ? "flex flex-col basis-1/4  border-r-2" : ""}`}
        >
          <div className="px-2 text-md">
            {routes.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`${isOpen ? "hidden" : ""}`}
                ></Link>
                {isOpen ? (
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="
                      hover:bg-green-600
                      hover:text-white
                      border-b-2
                      flex 
                      flex-col 
                      text-green-500
                      text-center 
                      py-4
                      w-full"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link href={item.href} className="hidden">
                    {item.label}
                  </Link>
                )}

                <div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-full">{children}</div>
      </div>
    </div>
  );
};
export default NavBar;
