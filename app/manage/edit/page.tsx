import EditTask from "../(CRUD)/EditTask";
//TODO use context instead of search Params
export default function Home({ searchParams }: any) {
  return (
    <div>
      <EditTask data={searchParams.data} />
    </div>
  );
}
