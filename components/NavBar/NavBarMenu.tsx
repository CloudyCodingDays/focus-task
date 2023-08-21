"use client";
import { useState } from "react";
import Routes from "./Routes";

const NavBarMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:w-5/12 w-7/12">
      <Routes onRoute={setOpen} />
    </div>
  );
};

export default NavBarMenu;
