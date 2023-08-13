import { Task } from "@/types/Task";
import ExtractFormData from "./ExtractFormData";
import AddTaskQuery from "./task_queries/AddTaskQuery";
import EditTaskQuery from "./task_queries/EditTaskQuery";
import DeleteTaskQuery from "./task_queries/DeleteTaskQuery";

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
