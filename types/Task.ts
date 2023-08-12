export interface Task {
  id: string;
  name: string;
  description: string;
  is_recurring: string;
  recurring_type: string;
  priority: string;
  due_date: string;
  created_at: string;
  created_by: string;

  //active current task
  user_id?: string;
  //Image for task
  image_path?: string;
}
/*export const OldTaskFields = [
  "old_created_at",
  "old_created_by",
  "old_description",
  "old_name",
  "old_due_date",
  "old_image_path",
  "old_is_recurring",
  "old_recurring_type",
  "old_priority",
]; */

export type OldTaskType = {
  id: string;
  name: string;
  description: string;
  is_recurring: string;
  recurring_type: string;
  priority: string;
  due_date: string;
  created_at: string;
  created_by: string;
  user_id?: string;
  image_path?: string;
};

export type TaskType = {
  id: string;
  name: string;
  description: string;
  is_recurring: string;
  recurring_type: string;
  priority: string;
  due_date: string;
  created_at: string;
  created_by: string;
  user_id?: string;
  image_path?: string;
};
