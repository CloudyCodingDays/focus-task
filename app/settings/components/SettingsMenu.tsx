import { Dispatch, SetStateAction } from "react";

const SettingsMenu = ({
  setCategory,
}: {
  setCategory: Dispatch<SetStateAction<string>>;
}) => {
  const currentCategory = "General";
  /*const settingCategories = [
    {
      Icon: <SlidersHorizontal size={18}/>,
      label: "General",
      active: currentCategory === "General",
      code: <GeneralSettings />,
    },
    {
      Icon: <Monitor size={18} />,
      label: "Display",
      active: currentCategory === "Display",
      code: <DisplaySettings />,
    },
    {
      Icon: <UserCog size={18} />,
      label: "User",
      active: currentCategory === "User",
      code: <UserSettings />,
    },
  ];
*/
  return (
    <div>
      <div className="bg-mainbg text-onMainBg flex flex-row justify-around mx-4 my-4 rounded-md">
        <button className="w-full py-4">
          <div>General</div>
        </button>
        <button className="w-full py-4">
          <div>User</div>
        </button>
        <button className="w-full py-4">
          <div>Display</div>
        </button>
      </div>
    </div>
  );
};
export default SettingsMenu;
