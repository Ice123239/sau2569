//Dynamic Routing -> /member/vip/?????
export default async function Page( {params}:{params:{memid:string}}) {
  const {memid} = await params

  return (
    <div>
      <h1>Member VIP Page</h1>
      <p>Member ID: {memid}</p>
    </div>
  );
}