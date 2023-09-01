import {Settings} from "@/types/Setting";
import {Label} from "@/components/ui/label";
import {FormEvent, FormEventHandler} from "react";
import {useUserInfo} from "@/hooks/useUserInfo";
import {UpdateDisplaySettings} from "@/app/settings/components/UpdateDisplaySettings";

const DisplaySettings = ({ settings }: { settings: Settings | undefined }) => {
  const {user} = useUserInfo();

  const HandleDisplaySettings: FormEventHandler<HTMLFormElement> = async (
      e: FormEvent<HTMLFormElement>
  ) => {
    await UpdateDisplaySettings(e, user?.id)
  }

  return <div>
    <form onSubmit={HandleDisplaySettings}>
      <div className="bg-mainBg text-onMainBg pt-2 rounded-lg ">
        <Label className="text-1xl font-semibold ml-4">
          User Profile Settings
        </Label>

        <div className="flex flex-col ml-4 mt-4">
          <Label className={"mb-2"}>First Name</Label>
          <input
              name="fName"
              className="w-fit mb-4"
          ></input>

          <Label className={"mb-2"}>Last Name</Label>
          <input
              name="lName"
              className="w-fit mb-4"
          ></input>

          <Label className={"mb-2"}>Email</Label>
          <input
              name="email"
              className="w-fit mb-4"
          ></input>

          <Label className={"mb-2"}>Password</Label>
          <input
              name="password"
              className="w-fit mb-4"
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
};

export default DisplaySettings;
