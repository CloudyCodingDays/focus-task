import EditTask from "../../../components/CRUD/EditForm";
//TODO use context instead of search Params
export default function Home({ searchParams }: any) {
  return (
    <div>
      <EditTask data={searchParams.data} />
    </div>
  );
}
