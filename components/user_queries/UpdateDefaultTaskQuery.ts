import supabase from "@/lib/supabaseClient";

export const UpdateDefaultTaskQuery = async (desc: string, priority: string, recurring: string, recurringType: string, duedate: string, userId: string) => {

    const {error} = await supabase.from("user_settings").update({
        default_desc: desc,
        default_due_date: duedate,
        default_priority: priority,
        default_recurring: recurring,
        default_recurring_type: recurringType,
    }).eq("user_id", userId)

    if (error) throw new Error(error.message);
}
