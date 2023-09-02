import { Settings } from "@/types/Setting";
import { useUserInfo } from "@/hooks/useUserInfo";
import { UpdateUserSettings } from "@/components/user_queries/UpdateUserSettings";
import { Label } from "@/components/ui/label";
import { useQueryClient } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";

export type UserSettingsFormData = {
  fName: string;
  lName: string;
  email: string;
  password: string;
};

const UserSettings = ({ settings }: { settings: Settings | undefined }) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { handleSubmit, register, watch } = useForm<UserSettingsFormData>();

  const HandleUserSettings: SubmitHandler<UserSettingsFormData> = async (
    data,
  ) => {
    await UpdateUserSettings(data, user?.id);
    await queryClient.resetQueries("Settings");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(HandleUserSettings)}>
        <div className="bg-mainBg text-onMainBg pt-2 rounded-lg ">
          <Label className="text-1xl font-semibold ml-4">
            User Profile Settings
          </Label>

          <div className="flex flex-col ml-4 mt-4">
            <Label className={"mb-2"}>First Name</Label>
            <input name="fName" className="w-fit mb-4"></input>

            <Label className={"mb-2"}>Last Name</Label>
            <input name="lName" className="w-fit mb-4"></input>

            <Label className={"mb-2"}>Email</Label>
            <input name="email" className="w-fit mb-4"></input>

            <Label className={"mb-2"}>Password</Label>
            <input name="password" className="w-fit mb-4"></input>
          </div>
        </div>

        <div className="text-center">
          <button
            type={"submit"}
            className="
        hover:bg-inverted
        hover:text-onInvertedBg
        bg-main
        text-onMainBg
              rounded-lg
              w-[10em]
              h-[3em]
              drop-shadow-md
              mx-4
              mt-8"
          >
            <div className="flex flex-row w-fit mx-4 px-2 py-2 items-baseline">
              Save Changes
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSettings;
