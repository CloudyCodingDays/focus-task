"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import FormSubmitButtons from "./FormSubmitButtons";
import { SubmitHandler, useForm } from "react-hook-form";
import AddTaskQuery from "@/components/CRUD_queries/AddTaskQuery";
import { Settings } from "@/types/Setting";

export type AddTaskFormData = {
  name: string;
  description: string;
  is_recurring: string;
  recurring_type: string;
  priority: string;
  due_date: string;
};

interface AddFormProps {
  onBack: Dispatch<SetStateAction<boolean>>;
  setting: Settings;
}

const AddTaskForm: React.FC<AddFormProps> = ({ onBack, setting }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { handleSubmit, register } = useForm<AddTaskFormData>();
  const [recurringType, setRecurringType] = useState<string>(
    setting.default_recurring_type,
  );
  const [recurring, setRecurring] = useState<boolean>(
    setting.default_recurring,
  );
  const defaultDue = NewTaskDefaultDate();
  const HandleAdd: SubmitHandler<AddTaskFormData> = async (data) => {
    if (user) {
      await toast.promise(AddTaskQuery(data, user?.id), {
        loading: "Creating Task...",
        success: "Task Created!",
        error: "Unable to create Task. Please try again.",
      });
    } else toast("No user data found. Please try again.");

    await queryClient.resetQueries("Tasks");
    await queryClient.resetQueries("ActiveTask");
    await queryClient.resetQueries("TaskCount");

    onBack(false);
    router.refresh();
  };

  function NewTaskDefaultDate() {
    if (setting.default_due_date === "today") {
      return new Date().toISOString().substring(0, 10);
    } else if (setting.default_due_date === "tomorrow") {
      const date = new Date(Date.now());
      date.setDate(date.getDate() + 1);
      return date.toISOString().substring(0, 10);
    } else if (setting.default_due_date === "week") {
      const date = new Date(Date.now());
      date.setDate(date.getDate() + 7);
      return date.toISOString().substring(0, 10);
    }

    return new Date().toISOString().substring(0, 10);
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit(HandleAdd)}>
        <div className="flex flex-col text-left text-sm">
          <input
            aria-label="Task Name"
            className="mb-4 w-full text-lg font-semibold"
            placeholder={"Task Name..."}
            {...register("name", { required: true, minLength: 2 })}
            autoFocus
          ></input>

          <textarea
            aria-label="Task Description"
            className="border-2 mb-4 h-[10em] w-full lg:w-[30em] resize-none"
            defaultValue={setting.default_desc}
            {...register("description")}
          ></textarea>

          <div className="mb-4 flex flex-row">
            <label htmlFor={"is_recurring"} className="w-1/4">
              Recurring?
            </label>
            <input
              id={"is_recurring"}
              type="checkbox"
              className="scale-150"
              onChangeCapture={(e) => {
                if (!e.currentTarget.checked) setRecurringType("");
                setRecurring(!recurring);
              }}
              checked={recurring}
              {...register("is_recurring")}
            ></input>
          </div>

          <label htmlFor={"frequency"}>Frequency</label>
          <select
            id={"frequency"}
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

          <label htmlFor={"priority"} className="w-1/4">
            Priority
          </label>
          <select
            id={"priority"}
            {...register("priority")}
            className="border-2 mb-4 w-full lg:w-[30em]"
            defaultValue={setting.default_priority}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <label htmlFor={"due_date"}>Due Date</label>
          <input
            id={"due_date"}
            {...register("due_date")}
            type="date"
            className="border-2 mb-4 w-full lg:w-[30em]"
            required
            defaultValue={defaultDue}
          ></input>
        </div>
        <FormSubmitButtons
          cancelText="Cancel"
          submitText="Add Task"
          onBack={onBack}
        />
      </form>
    </div>
  );
};

export default AddTaskForm;
