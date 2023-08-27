import NavBarLogin from "./NavBarLogin";
import NavBarLogo from "./NavBarLogo";
import NavBarMenu from "./NavBarMenu";
import Routes from "./Routes";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:min-h-screen">
      <div className="flex flex-row w-full justify-between items-center px-2 pt-2 mx-auto bg-green-500">
        <NavBarMenu />
        <NavBarLogo />
        <NavBarLogin />
      </div>
      <div className="flex flex-row md:flex-auto">
        <div className="md:block hidden bg-gray-100">
          <Routes />
        </div>
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
};
export default NavBar;
