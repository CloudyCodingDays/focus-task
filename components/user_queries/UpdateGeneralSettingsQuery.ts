import {UpdateDefaultTaskQuery} from "@/components/user_queries/UpdateDefaultTaskQuery";
import {UpdateCatPictureQuery} from "@/components/user_queries/UpdateCatPictureQuery";

export const UpdateGeneralSettingsQuery = async (desc: string, priority: string, recurring: string, recurringType: string, duedate: string, catPicture: string, userId: string) => {

    await UpdateDefaultTaskQuery(desc, priority, recurring, recurringType, duedate, userId)

    await UpdateCatPictureQuery(catPicture, userId)
}
