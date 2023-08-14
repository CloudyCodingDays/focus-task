import { Task } from "@/types/Task";

interface TaskItemDetailsLayoutProps {
  isEdit: boolean;
  task?: Task;
}
const TaskItemDetailsLayout: React.FC<TaskItemDetailsLayoutProps> = ({
  isEdit,
  task,
}) => {
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
            value={task.is_recurring ? "true" : "false"}
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
        <></>
      )}

      <div className="text-left mx-auto w-11/12 bg-gray-100 rounded-lg py-4 px-4">
        <div className="mb-4">
          <div>Task Name</div>
          <input
            name="name"
            className="border-2 w-full"
            placeholder={isEdit && task !== undefined ? task.name : "Name"}
            defaultValue={!isEdit && task !== undefined ? task.name : ""}
            required
            disabled={!isEdit}
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
            defaultValue={!isEdit && task !== undefined ? task.description : ""}
            disabled={!isEdit}
          ></input>
        </div>

        <div className="mb-4">
          Is this a Recurring Task?
          <input
            name="is_recurring"
            type="checkbox"
            className="ml-4 scale-125"
            defaultChecked={
              task !== undefined
                ? JSON.stringify(task.is_recurring) === "true"
                : false
            }
            disabled={!isEdit}
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
            defaultValue={
              !isEdit && task !== undefined ? task.recurring_type : ""
            }
            disabled={!isEdit}
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
            defaultValue={!isEdit && task !== undefined ? task.priority : ""}
            disabled={!isEdit}
          ></input>
        </div>

        {isEdit ? (
          <div className="mb-4">
            <div>Task Due Date</div>
            <input
              name="due_date"
              type="date"
              className="border-2 w-full"
              placeholder={
                isEdit && task !== undefined
                  ? task.due_date
                  : new Date().toDateString()
              }
            ></input>
          </div>
        ) : (
          <div className="mb-4">
            <div>Task Due Date</div>
            <input
              name="due_date"
              type="text"
              className="border-2 w-full"
              defaultValue={!isEdit && task !== undefined ? task.due_date : ""}
            ></input>
          </div>
        )}

        {false ? (
          <div className="mb-4">
            <div className="font-light mb-2">Upload image (Optional)</div>
            <input type="file" id="TaskImage" name="TaskImage"></input>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TaskItemDetailsLayout;
