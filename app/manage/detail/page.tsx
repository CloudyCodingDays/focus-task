import ViewTask from "../../../components/CRUD/ViewTask";
//TODO use context instead of search Params
export default function Home({ searchParams }: any) {
  return (
    <div>
      <ViewTask id={searchParams.id} />
    </div>
  );
}
