import TasksContainer from "@/components/TasksContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-8">
      <h1 className="text-xl text-center font-bold">TO Do App</h1>
      <TasksContainer />
    </main>
  );
}
