import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {useUserInfo} from "@/hooks/useUserInfo";
import {Settings} from "@/types/Setting";
import {Task} from "@/types/Task";
import {FormEvent, FormEventHandler} from "react";
import {UpdateGeneralSettings} from "@/app/settings/components/UpdateGeneralSettings";

const GeneralSettings = ({ settings }: { settings: Settings | undefined }) => {
  const { user } = useUserInfo();

    const defaultTask = {
        created_at: new Date().toLocaleDateString(),
        created_by: user?.id,
    description: settings?.default_desc,
        due_date: new Date().toLocaleDateString(),
        id: "",
    is_recurring: settings?.default_recurring
        ? settings?.default_recurring.toString()
        : "",
        name: "",
    priority: settings?.default_priority,
        recurring_type: settings?.default_recurring_type,
    updated_at: new Date().toLocaleDateString(),
    user_id: user?.id,
  } as Task;

    const HandleGeneralSettings: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
  ) => {
    await UpdateGeneralSettings(e, user?.id);
  };

  return (
    <div>
      <form onSubmit={HandleGeneralSettings}>
        <div className="bg-mainBg text-onMainBg rounded-lg pt-2">
          <Label className="text-1xl font-semibold mb-4 ml-4">
            Default New Task settings
          </Label>
          <TaskItemDetailsLayout task={defaultTask} isEdit isSetting />
        </div>
        <div className="bg-mainBg text-onMainBg mt-4 flex flex-col pt-2 rounded-lg">
          <Label className="text-1xl font-semibold mb-4 ml-4">
            Cat Picture Settings
          </Label>
          <div className="mb-4">
            <Checkbox
              name="catPicture"
              className="font-semibold ml-4"
            ></Checkbox>
            <Label> Cat Picture on task completion</Label>
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

export default GeneralSettings;
