import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
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

  return (
    <div className="text-center">
      <Label className="font-semibold">Default New Task values</Label>
      <TaskItemDetailsLayout task={defaultTask} isEdit isSetting />
    </div>
  );
};

export default GeneralSettings;
