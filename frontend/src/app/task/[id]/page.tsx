import TaskPage from "./taskPage";

export default async function getId({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;

  return <TaskPage id={id} />;
  }