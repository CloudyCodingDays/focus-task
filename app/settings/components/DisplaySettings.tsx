import { Settings } from "@/types/Setting";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import { useUserInfo } from "@/hooks/useUserInfo";
import Image from "next/image";
import { useQueryClient } from "react-query";
import { UpdateDisplaySettings } from "@/components/user_queries/UpdateDisplaySettings";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";

export type DisplaySettingsFormData = {
  HomeImage: string;
};

const DisplaySettings = ({ settings }: { settings: Settings | undefined }) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const [image, setImage] = useState(
    "/sarah-dorweiler-unsplash-compressed.png",
  );
  const { handleSubmit, register, watch } = useForm<DisplaySettingsFormData>();

  const HandleDisplaySettings: SubmitHandler<DisplaySettingsFormData> = async (
    data,
  ) => {
    await toast.promise(UpdateDisplaySettings(data, user?.id), {
      loading: "Saving Changes...",
      success: "Changes Saved!",
      error: "Unable to save Changes. Please try again.",
    });

    await queryClient.resetQueries("Settings");
  };

  const HandleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(HandleDisplaySettings)}>
        <div className="bg-mainBg text-onMainBg pt-2 rounded-lg ">
          <Label className="text-1xl font-semibold ml-4">
            User Profile Settings
          </Label>

          <div className="flex flex-col ml-4 py-4">
            <div className="font-light mb-2">
              Upload new Home image (Optional)
            </div>
            <input
              type="file"
              id="HomeImage"
              {...register("HomeImage")}
              accept="image/*"
              multiple={false}
              onChange={HandleFile}
            ></input>
          </div>
        </div>

        <div className="text-center">
          <button
            type={"submit"}
            className="hover:bg-inverted hover:text-onInvertedBg bg-main text-onMainBg rounded-lg w-[10em] h-[3em] drop-shadow-md mx-4 mt-8"
          >
            <div className="flex flex-row w-fit mx-4 px-2 py-2 items-baseline">
              Save Changes
            </div>
          </button>
        </div>
      </form>

      <div
        className={
          "bg-mainBg text-onMainBg mt-8 pt-4 pb-8 rounded-lg text-center flex flex-col items-center"
        }
      >
        <Label className="text-1xl font-semibold mb-4">
          Home Page Image Preview
        </Label>
        <Image
          src={image}
          width={800}
          height={351}
          priority
          alt="What would you like to do today?"
        />
      </div>
    </div>
  );
};

export default DisplaySettings;
