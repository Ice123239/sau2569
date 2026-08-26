export default async function Page({
  params,
}: {
  params: Promise<{ memname: string }>;
}) {
  const { memname } = await params;

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold">Member: {memname}</h1>
    </div>
  );
}