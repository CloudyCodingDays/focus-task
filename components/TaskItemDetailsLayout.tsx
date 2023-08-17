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

      <div className="text-left mx-auto w-11/12 bg-gray-100 rounded-lg py-4 px-4 text-sm">
        <div className="mb-4 flex flex-row">
          <div className="lg:w-1/5 w-1/3">Task Name</div>
          <input
            name="name"
            className="border-2 w-full"
            placeholder={isEdit ? "Name" : ""}
            defaultValue={task !== undefined ? task.name : ""}
            required
            disabled={!isEdit}
          ></input>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="lg:w-1/5 w-1/3">Task Description</div>
          <textarea
            name="description"
            className="border-2 w-full h-[10em]"
            placeholder={isEdit ? "Description" : ""}
            defaultValue={task !== undefined ? task.description : ""}
            disabled={!isEdit}
          ></textarea>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="lg:w-1/6 w-1/4">Is a Recurring Task?</div>
          <input
            name="is_recurring"
            type="checkbox"
            className="scale-125"
            defaultChecked={
              task !== undefined
                ? JSON.stringify(task.is_recurring) === "true"
                : false
            }
            disabled={!isEdit}
          ></input>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="lg:w-1/6 w-1/4">Recurring Type</div>
          <select
            name="recurring_type"
            className="w-[15em]"
            disabled={!isEdit}
            defaultValue={task !== undefined ? task.recurring_type : ""}
          >
            <option value=""></option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        <div className="mb-4 flex flex-row">
          <div className="lg:w-1/6 w-1/4">Task Priority</div>
          <select
            name="priority"
            className="w-[15em]"
            disabled={!isEdit}
            defaultValue={task !== undefined ? task.priority : ""}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {isEdit ? (
          <div className="mb-4 flex flex-row">
            <div className="lg:w-1/6 w-1/4">Task Due Date</div>
            <input
              name="due_date"
              type="date"
              className="border-2 w-[15em]"
              defaultValue={
                task !== undefined ? task.due_date : new Date().toDateString()
              }
            ></input>
          </div>
        ) : (
          <div className="mb-4 flex flex-row">
            <div className="lg:w-1/6 w-1/4">Task Due Date</div>
            <input
              name="due_date"
              type="text"
              className="border-2 w-[15em]"
              defaultValue={task !== undefined ? task.due_date : ""}
              disabled
            ></input>
          </div>
        )}

        {false ? (
          <div className="mb-4 flex flex-row">
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
