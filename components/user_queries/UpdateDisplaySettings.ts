import toast from "react-hot-toast";
import { FormEvent } from "react";
import supabase from "@/lib/supabaseClient";

export const UpdateDisplaySettings = async (
  e: FormEvent<HTMLFormElement>,
  userId?: string,
) => {
  const form = e.currentTarget;
  const formData = new FormData(form);
  const homeImage = formData.get("HomeImage") as File;

  if (userId === undefined) {
    toast("User ID not found");
    throw new Error("Something went wrong.");
  }

  const { data: ImageData, error: ImageError } = await supabase.storage
    .from("home_images")
    .upload("HomeImage-" + new Date(Date.now()).getTime(), homeImage, {
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
