import {Monitor, SlidersHorizontal, UserCog} from "lucide-react";
import {Dispatch, SetStateAction} from "react";

const SettingsMenu = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}) => {
  const settingCategories = [
    {
      Icon: <SlidersHorizontal size={18} />,
      label: "General",
      active: category === "General",
    },
    {
      Icon: <Monitor size={18} />,
      label: "Display",
      active: category === "Display",
    },
    {
      Icon: <UserCog size={18} />,
      label: "User",
      active: category === "User",
    },
  ];

  function HandleSettingViewChange(category: string) {
    setCategory(category)
  }

  return (
    <div className="flex flex-row justify-between rounded-md mb-4 border-2 border-main">
      {settingCategories.map((setting) => (
        <button
          key={setting.label}
          onClick={() => {
            HandleSettingViewChange(setting.label)
          }}
          className={
            setting.active
              ? "bg-mainBg text-onMainBg py-4 w-full"
              : "py-4 w-full"
          }
        >
          <div>{setting.label}</div>
        </button>
      ))}
    </div>
  );
};
export default SettingsMenu;
