import EditForm from "../../../components/CRUD/EditForm";

export default function Home({ searchParams }: any) {
  return (
    <div>
      <EditForm id={searchParams.id} />
    </div>
  );
}
