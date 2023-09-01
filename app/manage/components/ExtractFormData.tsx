import {Task} from "@/types/Task";

type OldTaskType = {
  old_created_at: string;
  old_description: string;
  old_name: string;
  old_due_date: string;
  old_image_path: string;
  old_is_recurring: string;
  old_recurring_type: string;
  old_priority: string;
  old_updated_at: string;
};

type TaskType = {
  id: string;
  name: string;
  description: string;
  is_recurring: string;
  recurring_type: string;
  priority: string;
  due_date: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  user_id?: string;
  image_path?: string;
};

const ExtractFormData = (formData: FormData) => {
  const entries = formData.entries();
  let taskData: Task;
  let oldTask = {} as OldTaskType;
  let task = {} as TaskType;

  for (let entry of entries) {
    const key = entry[0];
    const val = entry[1];
    if (key.includes("old")) {
      oldTask[key as keyof OldTaskType] = val as string;
    } else {
      if (val) {
        task[key as keyof TaskType] = val as string;
      } else {
        task[key as keyof TaskType] = formData.get("old_" + key) as string;
      }
    }
  }
  taskData = task;

  return taskData;
};

export default ExtractFormData;
