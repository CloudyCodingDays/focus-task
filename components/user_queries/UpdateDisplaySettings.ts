import toast from "react-hot-toast";
import supabase from "@/lib/supabaseClient";
import { FieldValues } from "react-hook-form";

export const UpdateDisplaySettings = async (
  fieldValues: FieldValues,
  userId?: string,
) => {
  const imageFile = fieldValues.HomeImage?.[0];
  if (userId === undefined) {
    toast("User ID not found");
    throw new Error("Something went wrong.");
  }

  const { data: ImageData, error: ImageError } = await supabase.storage
    .from("home_images")
    .upload("HomeImage-" + new Date(Date.now()).getTime(), imageFile, {
      cacheControl: "3600",
      upsert: false,
    });

  if (ImageError) throw new Error(ImageError.message);

  const { error: UserError } = await supabase
    .from("user_settings")
    .update({
      home_image: ImageData.path,
    })
    .eq("user_id", userId);
  if (UserError) throw new Error(UserError.message);
};
