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
  updated_at: string;
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
  old_created_at: string;
  old_description: string;
  old_name: string;
  old_due_date: string;
  old_image_path: string;
  old_is_recurring: string;
  old_recurring_type: string;
  old_priority: string;
  old_updated_at: string;
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
  updated_at: string;
  user_id?: string;
  image_path?: string;
};
export const TaskFields = [
  "id",
  "name",
  "description",
  "is_recurring",
  "recurring_type",
  "priority",
  "due_date",
  "created_at",
  "created_by",
  "updated_at",
  "user_id",
  "image_path",
];
