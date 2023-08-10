import { Task } from "@/types/Task";
import { Dispatch, SetStateAction } from "react";
import { BooleanLiteral } from "typescript";

interface TaskItemEdittableFormLayoutProps {
  isEdit: boolean;
  onBack: () => void;
  task?: Task;
}
const TaskItemEdittableFormLayout: React.FC<
  TaskItemEdittableFormLayoutProps
> = ({ isEdit, onBack, task }) => {
  return (
    <div>
      {isEdit && task !== undefined ? (
        <div>
          <input name="id" type="hidden" value={task.id}></input>
          <input
            name="old_created_at"
            type="hidden"
            value={task.created_at}
          ></input>
          <input
            name="old_description"
            type="hidden"
            value={task.description}
          ></input>
          <input name="old_name" type="hidden" value={task.name}></input>
          <input
            name="old_due_date"
            type="hidden"
            value={task.due_date}
          ></input>
          <input
            name="old_image_path"
            type="hidden"
            value={task.image_path}
          ></input>
          <input
            name="old_is_recurring"
            type="hidden"
            value={task.is_recurring ? "TRUE" : "FALSE"}
          ></input>
          <input
            name="old_recurring_type"
            type="hidden"
            value={task.recurring_type}
          ></input>
          <input
            name="old_priority"
            type="hidden"
            value={task.priority}
          ></input>
        </div>
      ) : (
        <div></div>
      )}

      <div className="py-4">
        Name
        <input
          name="name"
          className="border-2"
          placeholder={isEdit && task !== undefined ? task.name : ""}
          required
        ></input>
      </div>

      <div className="pb-4">
        Description
        <input
          name="description"
          className="border-2"
          placeholder={isEdit && task !== undefined ? task.description : ""}
        ></input>
      </div>

      <div className="pb-4">
        is_recurring
        <input
          name="is_recurring"
          type="checkbox"
          defaultChecked={
            isEdit && task !== undefined ? task.is_recurring : false
          }
        ></input>
      </div>

      <div className="pb-4">
        Recurring Type
        <input
          name="recurring_type"
          className="border-2"
          placeholder={isEdit && task !== undefined ? task.recurring_type : ""}
        ></input>
      </div>

      <div className="pb-4">
        Priority
        <input
          name="priority"
          className="border-2"
          placeholder={isEdit && task !== undefined ? task.priority : ""}
        ></input>
      </div>

      <div className="pb-4">
        Due Date
        <input
          name="due_date"
          type="date"
          className="ml-2 border-2"
          value={
            isEdit && task !== undefined
              ? task.due_date
              : new Date().toDateString()
          }
        ></input>
      </div>

      <div>
        <div>Upload image for this task (Optional)</div>
        <input type="file" id="TaskImage" name="TaskImage"></input>
      </div>

      <div className="pb-4">
        <button
          className="
    hover:bg-green-200
    hover:text-gray-500
    bg-white
    border-green-300 
    border-2 
    rounded-lg 
    ml-4 
    py-4 
    px-4
    mx-4"
          onClick={onBack}
          type="button"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TaskItemEdittableFormLayout;
