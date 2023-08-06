import NavBarMenu from "./NavBarMenu";
import NavBarLogo from "./NavBarLogo";
import NavBarLogin from "./NavBarLogin";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-row justify-between items-baseline px-4">
        <NavBarMenu />
        <NavBarLogo />
        <NavBarLogin />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default NavBar;
