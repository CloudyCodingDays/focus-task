import { Settings } from "@/types/Setting";
import GeneralSettings from "./GeneralSettings";
import DisplaySettings from "./DisplaySettings";
import UserSettings from "./UserSettings";

const SettingContent = ({
  category,
  settings,
}: {
  category: string;
  settings: Settings[] | undefined;
}) => {
  return (
    <div>
      {category === "General" ? <GeneralSettings settings={settings} /> : ""}
      {category === "Display" ? <DisplaySettings settings={settings} /> : ""}
      {category === "User" ? <UserSettings settings={settings} /> : ""}
    </div>
  );
};

export default SettingContent;
