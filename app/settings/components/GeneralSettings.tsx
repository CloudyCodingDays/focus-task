import { useUserInfo } from "@/hooks/useUserInfo";
import { Settings } from "@/types/Setting";
import { useQueryClient } from "react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { UpdateGeneralSettings } from "@/components/user_queries/UpdateGeneralSettings";
import { useRouter } from "next/navigation";

export type GeneralSettingsFormData = {
  description: string;
  is_recurring: string;
  recurring_type: string;
  priority: string;
  default_due_date: string;
  catPicture: string;
};

const GeneralSettings = ({ settings }: { settings: Settings | undefined }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { handleSubmit, register, watch } = useForm<GeneralSettingsFormData>();

  const HandleGeneralSettings: SubmitHandler<GeneralSettingsFormData> = async (
    data,
  ) => {
    await toast.promise(UpdateGeneralSettings(data, user?.id), {
      loading: "Saving Settings...",
      success: "Settings Saved!",
      error: "Unable to save changes. Please try again.",
    });
    await queryClient.resetQueries("Settings");
    router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(HandleGeneralSettings)}>
        <div className="bg-mainBg text-onMainBg rounded-lg pt-2">
          <div className={"ml-4 mb-4"}>
            <div className="text-1xl font-semibold mb-4">
              Default New Task settings
            </div>

            <div className={"mt-4"}>Description</div>
            <textarea
              className="border-2 mb-4 h-[10em] w-full lg:w-[30em] resize-none"
              defaultValue={settings?.default_desc}
              {...register("description", { required: true, minLength: 2 })}
            ></textarea>

            <div className="mb-4 flex flex-row">
              <div className="w-1/4">Recurring?</div>
              <input
                type="checkbox"
                className="scale-150"
                {...register("is_recurring")}
                defaultChecked={settings?.default_recurring}
              ></input>
            </div>

            <div>Frequency</div>
            <select
              {...register("recurring_type")}
              className="border-2 mb-4 w-full lg:w-[30em]"
              disabled={!watch("is_recurring")}
              defaultValue={settings?.default_recurring_type}
            >
              <option value=""></option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Bi-Weekly">Bi-Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>

            <div className="w-1/4">Priority</div>
            <select
              {...register("priority")}
              className="border-2 mb-4 w-full lg:w-[30em]"
              defaultValue={settings?.default_priority}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <div>Due Date</div>
            <select
              {...register("default_due_date")}
              className="border-2 mb-4 w-full lg:w-[30em]"
              defaultValue={settings?.default_due_date}
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="week">One week from today</option>
            </select>
          </div>
          <div className="bg-mainBg text-onMainBg mt-4 flex flex-col pt-2 rounded-lg">
            <div className="text-1xl font-semibold mb-4 ml-4">
              Cat Picture Settings
            </div>
            <div className="mb-4">
              <input
                {...register("catPicture")}
                className="font-semibold ml-4 scale-150"
                type="checkbox"
                defaultChecked={settings?.cat_pic_on_complete}
              ></input>
              <div className={"ml-2"}> Cat Picture on task completion</div>
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
              mt-8
               mb-4"
            >
              <div className="flex flex-row w-fit mx-4 px-2 py-2 items-baseline">
                Save Changes
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettings;
