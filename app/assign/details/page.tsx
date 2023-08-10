import ViewTask from "../../../components/ViewTask";
import AssignForm from "./components/AssignForm";
//TODO use context instead of search Params
export default function Home({ searchParams }: any) {
  return (
    <div>
      <ViewTask id={searchParams.id} />
      <AssignForm id={searchParams.id} />
    </div>
  );
}
