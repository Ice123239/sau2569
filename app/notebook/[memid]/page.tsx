export default async function Page({
  params,
}: {
  params: Promise<{ memid: string }>;
}) {
  const { memid } = await params;

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold font-mono">Notebook ID: {memid}</h1>
    </div>
  );
}