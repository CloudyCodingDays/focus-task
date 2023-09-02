import AddTaskQuery from "@/components/CRUD_queries/AddTaskQuery";
import DeleteTaskQuery from "@/components/CRUD_queries/DeleteTaskQuery";
import EditTaskQuery from "@/components/CRUD_queries/EditTaskQuery";
import { Task } from "@/types/Task";
import ExtractFormData from "./ExtractFormData";

export const FormSubmit = async (
  formData: FormData,
  submitType: string,
  userId?: string,
) => {
  const taskData: Task = ExtractFormData(formData);

  if (submitType.trim() == "add" && userId) {
    await AddTaskQuery(taskData, userId);
  } else if (submitType.trim() == "edit" && userId) {
    await EditTaskQuery(taskData, userId);
  } else if (submitType.trim() == "delete" && userId) {
    await DeleteTaskQuery(taskData.id, userId);
  }
};
