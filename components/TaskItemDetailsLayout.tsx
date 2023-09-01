import {Task} from "@/types/Task";

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
  return (
    <div className="text-gray-600 lg:flex lg:justify-center h-fit">
      {isEdit && task !== undefined && !isSetting ? (
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

      <div className="text-left rounded-lg text-sm drop-shadow-lg">
        {!isSetting ? (
          <div>
            <div>Name</div>
            <input
              name="name"
              className="border-2 mb-4 w-full lg:w-[30em]"
              placeholder={isEdit ? "Name" : ""}
              defaultValue={task !== undefined ? task.name : ""}
              required
              disabled={!isEdit}
            ></input>
          </div>
        ) : (
          <div></div>
        )}

        <div>Description</div>
        <textarea
          name="description"
          className="border-2 mb-4 h-[10em] w-full lg:w-[30em] resize-none"
          placeholder={isEdit ? "Description" : ""}
          defaultValue={task !== undefined ? task.description : ""}
          required
          disabled={!isEdit}
        ></textarea>

        <div className="mb-4 flex flex-row">
          <div className="w-1/4">Recurring?</div>
          <input
            name="is_recurring"
            type="checkbox"
            className="scale-150"
            defaultChecked={
              task !== undefined
                ? JSON.stringify(task.is_recurring) === "true"
                : false
            }
            disabled={!isEdit}
          ></input>
        </div>

        {/*TODO: Convert this form over to react hook forms and use solution here to enable/disable input based on checkbox above
        https://stackoverflow.com/questions/69233210/how-to-conditional-disable-input-depend-on-another-input-value-in-react-hook-fo*/}
        <div>Frequency</div>
        <select
          name="recurring_type"
          className="border-2 mb-4 w-full lg:w-[30em]"
          disabled={!isEdit}
          defaultValue={task !== undefined ? task.recurring_type : ""}
        >
          <option value=""></option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Bi-Weekly">Bi-Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>

        <div className="w-1/4">Priority</div>
        <select
          name="priority"
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
              name="due_date"
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
              name="due_date"
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
                name="default_task_due"
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
