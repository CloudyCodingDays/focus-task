"use client";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "react-query";
import { FormSubmit } from "./HandleSubmitCRUD";
import FormSubmitButtons from "@/components/FormSubmitButtons";
interface DeleteFormProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ id, onBack }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await FormSubmit(e, "delete");

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
