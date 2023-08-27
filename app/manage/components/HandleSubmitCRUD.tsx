import AddTaskQuery from "@/components/CRUD_queries/AddTaskQuery";
import DeleteTaskQuery from "@/components/CRUD_queries/DeleteTaskQuery";
import EditTaskQuery from "@/components/CRUD_queries/EditTaskQuery";
import { Task } from "@/types/Task";
import ExtractFormData from "./ExtractFormData";
import GetTaskDetailsByTaskId from "@/components/task_queries/GetTaskDetailsByTaskId";

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
    return await AddTaskQuery(taskData, userId);
  } else if (submitType.trim() == "edit" && userId) {
    return await EditTaskQuery(taskData, userId);
  } else if (submitType.trim() == "delete" && userId) {
    return await DeleteTaskQuery(taskData.id, userId);
  }
};
