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
    <div className="flex flex-col justify-start items-center">
      <div className="text-2xl text-green-500">Focus Task</div>
      <div className="mt-12 flex flex-col w-full">
        {routes.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => {
              onRoute(false);
            }}
          >
            <div
              className="
          hover:bg-green-600
          hover:text-white
          first:border-b-2 
          first:border-t-2
          last:border-t-2
          last:border-b-2 
          flex 
          flex-col 
          text-green-500
          text-center 
          py-8 
          w-full"
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Routes;
