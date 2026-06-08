import NoteCard from "./components/organisms/NoteCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">
        Vista en la página
      </h1>

      <NoteCard />
    </main>
  );
}