import { Settings } from "@/types/Setting";
import GeneralSettings from "./GeneralSettings";
import UserSettings from "./UserSettings";

const SettingContent = ({
  category,
  settings,
}: {
  category: string;
  settings: Settings | undefined;
}) => {
  return (
    <div>
      {category === "General" ? <GeneralSettings settings={settings} /> : ""}
      {category === "User" ? <UserSettings /> : ""}
    </div>
  );
};

export default SettingContent;
