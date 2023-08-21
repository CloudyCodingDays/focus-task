"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useMemo } from "react";

interface RoutesProp {
  onRoute: Dispatch<SetStateAction<boolean>>;
}
const Routes: React.FC<RoutesProp> = ({ onRoute }) => {
  const pathname = usePathname();
  const activePathStyle = "border-2 border-green-200 px-2 rounded-lg";
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
        label: "Manage Tasks",
        active: pathname === "/manage",
        href: "/manage",
      },
      {
        //Icon: BiSearch,
        label: "Settings",
        active: pathname === "/settings",
        href: "/settings",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex flex-row justify-around items-center">
      {routes.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => {
            onRoute(false);
          }}
          className={item.active ? activePathStyle : ""}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Routes;
