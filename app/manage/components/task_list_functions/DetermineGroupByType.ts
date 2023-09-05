import { Task } from "@/types/Task";

export interface TaskGroupType {
  Header: string;
  TaskList: Task[];
}

const SetRecurringGroupByType = (taskList: Task[]) => {
  return [
    {
      Header: "Recurring",
      TaskList: taskList?.filter((task) => task.is_recurring),
    },
    {
      Header: "Not Recurring",
      TaskList: taskList?.filter((task) => !task.is_recurring),
    },
  ] as TaskGroupType[];
};
const SetRecurringTypeGroupByType = (taskList: Task[]) => {
  return [
    {
      Header: "Daily",
      TaskList: taskList?.filter((task) => task.recurring_type === "Daily"),
    },
    {
      Header: "Weekly",
      TaskList: taskList?.filter((task) => task.recurring_type === "Weekly"),
    },
    {
      Header: "Bi-Weekly",
      TaskList: taskList?.filter((task) => task.recurring_type === "Bi-Weekly"),
    },
    {
      Header: "Monthly",
      TaskList: taskList?.filter((task) => task.recurring_type === "Monthly"),
    },
  ] as TaskGroupType[];
};
const SetPriorityGroupByType = (taskList: Task[]) => {
  return [
    {
      Header: "High Priority",
      TaskList: taskList?.filter((task) => task.priority === "High"),
    },
    {
      Header: "Medium Priority",
      TaskList: taskList?.filter((task) => task.priority === "Medium"),
    },
    {
      Header: "Low Priority",
      TaskList: taskList?.filter((task) => task.priority === "Low"),
    },
  ] as TaskGroupType[];
};
const SetDueGroupByType = (taskList: Task[]) => {
  function FormatTodayDate(date?: string) {
    const newDate = date ? new Date(date) : new Date(Date.now());
    newDate.setHours(0, 0, 0);
    newDate.setMilliseconds(0);
    return newDate;
  }

  return [
    {
      Header: "Over Due",
      TaskList: taskList?.filter((task) => {
        const due = FormatTodayDate(task.due_date);
        due.setDate(due.getDate() + 1); //Add one day to bring it back to current day after date conversion
        const todayDate = FormatTodayDate();

        return due.getTime() < todayDate.getTime();
      }),
    },
    {
      Header: "Today",
      TaskList: taskList?.filter((task) => {
        const due = FormatTodayDate(task.due_date);
        due.setDate(due.getDate() + 1); //Add one day to bring it back to current day after date conversion
        const todayDate = FormatTodayDate();

        return due.getTime() === todayDate.getTime();
      }),
    },
    {
      Header: "Tomorrow",
      TaskList: taskList?.filter((task) => {
        const due = FormatTodayDate(task.due_date);
        due.setDate(due.getDate() + 1); //Add one day to bring it back to current day after date conversion
        const tomorrowDate = FormatTodayDate();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);

        return due.getTime() === tomorrowDate.getTime();
      }),
    },
    {
      Header: "Future Due",
      TaskList: taskList?.filter((task) => {
        const due = FormatTodayDate(task.due_date);
        due.setDate(due.getDate() + 1); //Add one day to bring it back to current day after date conversion
        const tomorrowDate = FormatTodayDate();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);

        return due.getTime() > tomorrowDate.getTime();
      }),
    },
  ] as TaskGroupType[];
};

export const DetermineGroupByType = (GroupBy: string, taskList: Task[]) => {
  switch (GroupBy) {
    case "recurring":
      return SetRecurringGroupByType(taskList);
    case "recurring type":
      return SetRecurringTypeGroupByType(taskList);
    case "priority":
      return SetPriorityGroupByType(taskList);
    case "due date":
      return SetDueGroupByType(taskList);
    default:
      return [
        {
          Header: "All",
          TaskList: taskList,
        },
      ] as TaskGroupType[];
  }
};
