import ViewTask from "../(CRUD)/ViewTask";
//TODO use context instead of search Params
export default function Home({ searchParams }: any) {
  return (
    <div>
      <ViewTask data={searchParams.data} />
    </div>
  );
}
