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

      <div className="lg:w-2/5 md:w-2/3 text-left mx-auto w-4/5  bg-gray-100 rounded-lg py-4 px-4">
        <div className="mb-4">
          <div>Task Name</div>
          <input
            name="name"
            className="border-2 w-full"
            placeholder={isEdit && task !== undefined ? task.name : "Name"}
            required
          ></input>
        </div>

        <div className="mb-4">
          <div>Task Description</div>
          <input
            name="description"
            className="border-2 w-full"
            placeholder={
              isEdit && task !== undefined ? task.description : "Description"
            }
          ></input>
        </div>

        <div className="mb-4">
          Is this a Recurring Task?
          <input
            name="is_recurring"
            type="checkbox"
            className="ml-4 scale-125"
            defaultChecked={
              isEdit && task !== undefined ? task.is_recurring : false
            }
          ></input>
        </div>

        <div className="mb-4">
          <div>Recurring Type</div>
          <input
            name="recurring_type"
            className="border-2 w-full"
            placeholder={
              isEdit && task !== undefined
                ? task.recurring_type
                : "Recurring Type"
            }
          ></input>
        </div>

        <div className="mb-4">
          <div>Task Priority</div>
          <input
            name="priority"
            className="border-2 w-full"
            placeholder={
              isEdit && task !== undefined ? task.priority : "Priority"
            }
          ></input>
        </div>

        <div className="mb-4">
          <div>Task Due Date</div>
          <input
            name="due_date"
            type="date"
            className="border-2 w-full"
            value={
              isEdit && task !== undefined
                ? task.due_date
                : new Date().toDateString()
            }
          ></input>
        </div>

        <div className="mb-4">
          <div className="font-light mb-2">Upload image (Optional)</div>
          <input type="file" id="TaskImage" name="TaskImage"></input>
        </div>

        <div className="mb-4 text-center">
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
            className="              
              hover:bg-green-300
              hover:text-gray-100
              bg-green-400
              text-green-600
              rounded-lg               
              ml-4 
              py-4 
              px-4
              mx-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItemEdittableFormLayout;
