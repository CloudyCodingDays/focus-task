import { Settings } from "@/types/Setting";
import { useUserInfo } from "@/hooks/useUserInfo";
import { UpdateUserSettings } from "@/components/user_queries/UpdateUserSettings";
import { useQueryClient } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export type UserSettingsFormData = {
  fName: string;
  lName: string;
  email: string;
  password: string;
};

const UserSettings = () => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { handleSubmit, register } = useForm<UserSettingsFormData>();

  const HandleUserSettings: SubmitHandler<UserSettingsFormData> = async (
    data,
  ) => {
    await toast.promise(UpdateUserSettings(data, user?.id), {
      loading: "Saving Settings...",
      success: "Check new email for confirmation mail!",
      error: "Unable to save changes. Please try again.",
    });

    await queryClient.resetQueries("Settings");
    router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(HandleUserSettings)}>
        <div className="bg-mainBg text-onMainBg pt-2 rounded-lg ">
          <div className="text-1xl font-semibold ml-4">
            User Profile Settings
          </div>

          <div className="flex flex-col ml-4 mt-4">
            <div className={"mb-2"}>Email</div>
            <input
              {...register("email")}
              className="w-fit mb-4"
              required
              defaultValue={user?.email}
            ></input>

            <div className={"mb-2"}>Password</div>
            <input
              {...register("password")}
              type={"password"}
              className="w-fit mb-4"
              required
            ></input>
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
