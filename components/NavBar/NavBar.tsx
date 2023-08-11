import NavBarMenu from "./NavBarMenu";
import NavBarLogo from "./NavBarLogo";
import NavBarLogin from "./NavBarLogin";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-row justify-between items-baseline px-4 mt-4 w-4/5 mx-auto">
        <NavBarMenu />
        <NavBarLogo />
        <NavBarLogin />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default NavBar;
