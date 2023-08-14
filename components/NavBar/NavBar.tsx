import NavBarLogin from "./NavBarLogin";
import NavBarLogo from "./NavBarLogo";
import NavBarMenu from "./NavBarMenu";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-row justify-between items-baseline px-4 mt-4 w-11/12 mx-auto">
        <NavBarMenu />
        <NavBarLogo />
        <NavBarLogin />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default NavBar;
