import NavBarMenu from "./NavBarMenu";
import NavBarLogo from "./NavBarLogo";
import NavBarLogin from "./NavBarLogin";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <NavBarMenu />
        <NavBarLogo />
        <NavBarLogin />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default NavBar;
