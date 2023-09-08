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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserSettingsFormData>();

  const HandleUserSettings: SubmitHandler<UserSettingsFormData> = async (
    data,
  ) => {
    await toast.promise(UpdateUserSettings(data, user), {
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
        <div className="w-1/2 mx-auto">
          <div className="text-1xl font-semibold ml-4">
            User Profile Settings
          </div>

          <div className="flex flex-col ml-4 mt-4">
            <label htmlFor={"email"} className={"mb-2"}>
              Email
            </label>
            <div>
              <input
                autoComplete={"off"}
                id={"email"}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                className="w-full mb-4 mr-2"
                required
                defaultValue={user?.email}
              ></input>
              {errors.email && (
                <span className={"text-onMainBg font-semibold"}>
                  Invalid email
                </span>
              )}
            </div>

            <label htmlFor={"password"} className={"mb-2"}>
              Password
            </label>
            <input
              {...register("password")}
              id={"password"}
              type={"password"}
              className="w-full mb-4"
              required
            ></input>
          </div>
        </div>

        <div className="text-center">
          <button
            id="SaveUserSettings"
            aria-label="Save User Settings button"
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
