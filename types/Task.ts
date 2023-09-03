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
}
