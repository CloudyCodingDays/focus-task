"use client";
import FormSubmitButtons from "@/components/FormSubmitButtons";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "react-query";
import { FormSubmit } from "./HandleSubmitCRUD";
import { useUserInfo } from "@/hooks/useUserInfo";
import useTaskListContext from "@/hooks/useTaskListContext";

interface DeleteFormProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ id, onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { showToast, setShowToast } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    const isSuccess = await FormSubmit(e, "delete", user?.id);
    if (isSuccess && setShowToast !== undefined) setShowToast(true);

    queryClient.resetQueries("Tasks");

    onBack(false);
    router.refresh();
  };

  return (
    <div>
      <div className="text-center">
        <form method="post" onSubmit={HandleSubmit}>
          <FormSubmitButtons
            submitText="Delete Task"
            onBack={onBack}
            isDelete
          />
          <div>
            <input name="id" type="hidden" value={id}></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteForm;
