import { Calendar } from "@/components/ui_components/calendar";
import { DayClickEventHandler } from "react-day-picker";
import { Dispatch, SetStateAction, useState } from "react";

const AssignCalendar = ({
  date,
  setDate,
  taskExistsDays,
}: {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  taskExistsDays: Date[];
}) => {
  const [taskExists, setTaskExists] = useState<boolean>(false);

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setTaskExists(day && modifiers.taskExists);
  };
  return (
    <Calendar
      mode="single"
      selected={date}
      required
      onSelect={setDate}
      onDayClick={handleDayClick}
      modifiers={{ taskExists: taskExistsDays }}
      modifiersClassNames={{ taskExists: "taskExistsStyle" }}
    />
  );
};

export default AssignCalendar;
