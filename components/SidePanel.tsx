"use client";
import { useState } from "react";
interface SidePanelProps {
  children: React.ReactNode;
}
const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      <div className="h-screen bg-gray-800 ">
        <button className=" px-4 py-2 w-full text-3xl" onClick={toggleMenu}>
          {isOpen ? "Take It Easy" : "TIE"}
        </button>
        <div className={`${isOpen ? "hidden" : ""}`}>Hidden</div>
        <div className={`${isOpen ? "" : "hidden"}`}>Open</div>
      </div>
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  );
};

export default SidePanel;
