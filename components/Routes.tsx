"use client";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useMemo } from "react";
import Link from "next/link";
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

  return (
    <div className="border-l-2 border-r-2">
      {routes.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => {
            onRoute(false);
          }}
          className="flex flex-col text-center py-8 w-full border-t-2 border-b-2"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Routes;
