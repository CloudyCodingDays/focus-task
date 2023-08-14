import AddTaskQuery from "@/components/task_queries/AddTaskQuery";
import DeleteTaskQuery from "@/components/task_queries/DeleteTaskQuery";
import EditTaskQuery from "@/components/task_queries/EditTaskQuery";
import { Task } from "@/types/Task";
import ExtractFormData from "./ExtractFormData";

export const FormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  submitType: string,
  userId?: string
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const taskData: Task = ExtractFormData(formData);

  if (submitType.trim() == "add" && userId) {
    await AddTaskQuery(taskData, userId);
  } else if (submitType.trim() == "edit") {
    await EditTaskQuery(taskData);
  } else if (submitType.trim() == "delete") {
    await DeleteTaskQuery(taskData.id);
  }
};
