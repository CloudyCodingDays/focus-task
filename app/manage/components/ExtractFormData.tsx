import { OldTaskType, Task, TaskType } from "@/types/Task";

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
