export default async function FromExpressNoInitOptPage() {
  const response = await fetch("http://localhost:2999/");
  const fromExpress = await response.json();
  return (
    <main>
      <div>{fromExpress.date}</div>
      <div>From Express</div>
      <div>fetch using: No init options</div>
    </main>
  );
}
