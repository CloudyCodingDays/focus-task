"use client";
import FormSubmitButtons from "@/components/FormSubmitButtons";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import EditTaskQuery from "@/components/CRUD_queries/EditTaskQuery";

export type EditTaskFormData = {
  old_description: string;
  old_due_date: string;
  old_recurring_type: string;
  old_priority: string;
  id: string;
  name: string;
  description: string;
  is_recurring: string;
  recurring_type: string;
  priority: string;
  due_date: string;
  created_at: string;
};

interface EditFormProps {
  task: Task;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const EditTaskForm: React.FC<EditFormProps> = ({ task, onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { handleSubmit, register } = useForm<EditTaskFormData>();

  const [recurringType, setRecurringType] = useState<string>(
    task !== undefined && task?.is_recurring ? task?.recurring_type : "",
  );
  const [recurring, setRecurring] = useState<boolean>(
    JSON.stringify(task?.is_recurring) === "true",
  );

  const HandleEdit: SubmitHandler<EditTaskFormData> = async (data) => {
    if (user) {
      await toast.promise(EditTaskQuery(data, user?.id), {
        loading: "Updating Task...",
        success: "Task Updated!",
        error: "Unable to Update Task. Please try again.",
      });
    } else toast("User data not found. Please try again.");

    await queryClient.resetQueries("Tasks");
    await queryClient.resetQueries("ActiveTask");
    await queryClient.resetQueries("TaskCount");

    onBack(false);
    router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(HandleEdit)}>
        <div className="flex flex-col text-gray-600 lg:flex lg:justify-center h-fit">
          <input {...register("id")} type="hidden" value={task?.id}></input>

          <div>Description</div>
          <textarea
            className="border-2 mb-4 h-[10em] w-full lg:w-[30em] resize-none"
            defaultValue={task?.description}
            {...register("description", { required: true, minLength: 2 })}
          ></textarea>

          <div className="mb-4 flex flex-row">
            <div className="w-1/4">Recurring?</div>
            <input
              type="checkbox"
              className="scale-150"
              onChangeCapture={(e) => {
                if (!e.currentTarget.checked) setRecurringType("");
                setRecurring(e.currentTarget.checked);
              }}
              checked={recurring}
              {...register("is_recurring")}
            ></input>
          </div>

          <div>Frequency</div>
          <select
            {...register("recurring_type")}
            className="border-2 mb-4 w-full lg:w-[30em]"
            disabled={!recurring}
            onChange={(e) => {
              setRecurringType(e.target.value);
            }}
            value={recurringType}
            required={recurring}
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
            defaultValue={task?.priority}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <div>
            <div>Due Date</div>
            <input
              {...register("due_date")}
              type="date"
              className="border-2 mb-4 w-full lg:w-[30em]"
              required
              defaultValue={task.due_date.substring(0, 10)}
            ></input>
          </div>
        </div>
        <FormSubmitButtons submitText="Edit Task" onBack={onBack} />
      </form>
    </div>
  );
};

export default EditTaskForm;
