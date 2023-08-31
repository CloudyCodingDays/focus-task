import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Settings } from "@/types/Setting";
import { Task } from "@/types/Task";

const GeneralSettings = ({ settings }: { settings: Settings | undefined }) => {
  const { user } = useUserInfo();
  const defaultTask = {
    id: "",
    name: "",
    description: settings?.default_desc,
    is_recurring: settings?.default_recurring
      ? settings?.default_recurring.toString()
      : "",
    recurring_type: settings?.default_recurring_type,
    priority: settings?.default_priority,
    due_date: new Date().toLocaleDateString(),
    created_at: new Date().toLocaleDateString(),
    created_by: user?.id,
    updated_at: new Date().toLocaleDateString(),
    user_id: user?.id,
  } as Task;

  const HandleGeneralSettings: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
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
