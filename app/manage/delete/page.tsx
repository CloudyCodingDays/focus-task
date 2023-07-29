import DeleteTask from "../(CRUD)/DeleteTask";
//TODO use context instead of search Params
export default function Home({ searchParams }: any) {
  return (
    <div>
      <DeleteTask data={searchParams.data} />
    </div>
  );
}
