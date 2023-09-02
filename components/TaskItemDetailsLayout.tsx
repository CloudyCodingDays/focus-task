import { Task } from "@/types/Task";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

export type TaskFormData = {
  old_created_at: string;
  old_description: string;
  old_name: string;
  old_due_date: string;
  old_image_path: string;
  old_is_recurring: string;
  old_recurring_type: string;
  old_priority: string;
  old_updated_at: string;
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
  default_task_due: string;
  catPicture: string;
};

interface TaskItemDetailsLayoutProps {
  task?: Task;
  isEdit: boolean;
  isSetting?: boolean;
}

const TaskItemDetailsLayout: React.FC<TaskItemDetailsLayoutProps> = ({
  task,
  isEdit,
  isSetting = false,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TaskFormData>();

  const recurringTypeValue =
    JSON.stringify(task?.is_recurring) === "true"
      ? task !== undefined
        ? task?.recurring_type
        : ""
      : "";

  const [recurringType, setRecurringType] =
    useState<string>(recurringTypeValue);
  const [recurring, setRecurring] = useState<boolean>(
    JSON.stringify(task?.is_recurring) === "true",
  );

  return (
    <div className="text-gray-600 lg:flex lg:justify-center h-fit">
      {isEdit && task !== undefined && !isSetting ? (
        <div>
          <input name="id" type="hidden" value={task.id}></input>
          <input
            type="hidden"
            value={task.created_at}
            {...register("old_created_at")}
          ></input>
          <input
            {...register("old_description")}
            type="hidden"
            value={task.description}
          ></input>
          <input name="old_name" type="hidden" value={task.name}></input>
          <input
            type="hidden"
            value={task.due_date}
            {...register("old_due_date")}
          ></input>
          <input
            type="hidden"
            value={task.is_recurring ? "true" : "false"}
            {...register("old_is_recurring")}
          ></input>
          <input
            type="hidden"
            value={task.recurring_type}
            {...register("old_recurring_type")}
          ></input>
          <input
            type="hidden"
            value={task.priority}
            {...register("old_priority")}
          ></input>
        </div>
      ) : (
        <></>
      )}

      <div className="text-left rounded-lg text-sm drop-shadow-lg">
        {!isSetting ? (
          <div>
            <div>Name</div>
            <input
              className="border-2 mb-4 w-full lg:w-[30em]"
              placeholder={isEdit ? "Name" : ""}
              defaultValue={task !== undefined ? task.name : ""}
              {...register("name", { required: true, minLength: 2 })}
              disabled={!isEdit}
            ></input>
          </div>
        ) : (
          <div></div>
        )}

        <div>Description</div>
        <textarea
          className="border-2 mb-4 h-[10em] w-full lg:w-[30em] resize-none"
          placeholder={isEdit ? "Description" : ""}
          defaultValue={task !== undefined ? task.description : ""}
          {...register("description", { required: true, minLength: 2 })}
          disabled={!isEdit}
        ></textarea>

        <div className="mb-4 flex flex-row">
          <div className="w-1/4">Recurring?</div>
          <input
            type="checkbox"
            className="scale-150"
            onChangeCapture={(e) => {
              setRecurringType("");
              setRecurring(e.currentTarget.checked);
            }}
            {...register("is_recurring")}
            disabled={!isEdit}
          ></input>
        </div>

        <div>Frequency</div>
        <select
          {...register("recurring_type")}
          className="border-2 mb-4 w-full lg:w-[30em]"
          disabled={!watch("is_recurring")}
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
          disabled={!isEdit}
          defaultValue={task !== undefined ? task.priority : ""}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        {isEdit && !isSetting ? (
          <div>
            <div>Due Date</div>
            <input
              {...register("due_date")}
              type="date"
              className="border-2 mb-4 w-full lg:w-[30em]"
              required
              defaultValue={
                task !== undefined
                  ? task.due_date.substring(0, 10)
                  : new Date().toLocaleDateString()
              }
            ></input>
          </div>
        ) : (
          <div className={isSetting ? "hidden" : ""}>
            <div>Due Date</div>
            <input
              {...register("due_date")}
              type="text"
              className="border-2 mb-4 w-full lg:w-[30em]"
              defaultValue={
                task !== undefined
                  ? task.due_date.substring(0, 10)
                  : "12/31/9999"
              }
              disabled
            ></input>
          </div>
        )}

        {isSetting ? (
          <div>
            <div>Due Date</div>
            <select
              {...register("default_task_due")}
              className="border-2 mb-4 w-full lg:w-[30em]"
              disabled={!isEdit}
              defaultValue={task !== undefined ? task.recurring_type : ""}
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="week">One week from today</option>
            </select>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TaskItemDetailsLayout;
