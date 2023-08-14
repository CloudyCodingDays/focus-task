"use client";
import { AssignFormSubmit } from "@/app/(site)/components/HandleSubmitAssign";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";

interface AssignFormProps {
  id: string;
}

const AssignForm: React.FC<AssignFormProps> = ({ id }) => {
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
        <div className="hover:bg-green-500 hover:text-white bg-green-200 text-green-600 rounded-lg px-4 py-4 mt-8">
          <button type="submit">Assign Task</button>
        </div>
      </form>
    </div>
  );
};
export default AssignForm;
