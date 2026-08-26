export default async function Page({
  params,
}: {
  params: Promise<{ memname: string; memage: string; memid: string }>;
}) {
  const { memname, memage, memid } = await params;

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold">VIP Profile</h1>
      <p>Name: {memname}</p>
      <p>Age: {memage}</p>
      <p>ID: {memid}</p>
    </div>
  );
}