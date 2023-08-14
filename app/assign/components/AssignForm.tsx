"use client";
import { AssignFormSubmit } from "@/app/(site)/components/HandleSubmitAssign";
import FormSubmitButtons from "@/components/FormSubmitButtons";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";
import { Dispatch, SetStateAction } from "react";

interface AssignFormProps {
  id: string;
  onBack: Dispatch<SetStateAction<boolean>>;
}

const AssignForm: React.FC<AssignFormProps> = ({ id, onBack }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    await AssignFormSubmit(e, "assign", user?.id);
    queryClient.resetQueries("ActiveTask");
    router.push("/");
  };
  return (
    <div className="w-fit mx-auto">
      <form method="post" onSubmit={HandleSubmit}>
        <div>
          <input name="id" type="hidden" value={id}></input>
          <input name="userId" type="hidden" value={user?.id}></input>
        </div>
        <FormSubmitButtons submitText="Assign Task" onBack={onBack} />
      </form>
    </div>
  );
};
export default AssignForm;
