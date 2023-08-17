"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useMemo } from "react";

interface RoutesProp {
  onRoute: Dispatch<SetStateAction<boolean>>;
}
const Routes: React.FC<RoutesProp> = ({ onRoute }) => {
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
        label: "Manage Tasks",
        active: pathname === "/manage",
        href: "/manage",
      },
    ],
    [pathname]
  );

  return (
    <div>
      {routes.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => {
            onRoute(false);
          }}
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
        </Link>
      ))}
    </div>
  );
};

export default Routes;
