import supabase from "@/lib/supabaseClient";

export const UpdateCatPictureQuery = async (catPicture: string, userId: string) => {

    const {error} = await supabase.from("user_settings").update({
        cat_pic_on_complete: catPicture,
    }).eq("user_id", userId)

    if (error) throw new Error(error.message);
}
