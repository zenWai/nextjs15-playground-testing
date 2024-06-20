export default async function FromExpressNoStorePage() {
  const response = await fetch("http://localhost:2999/", {
    cache: "no-store",
  });
  const fromExpress = await response.json();
  return (
    <main>
      <div>{fromExpress.date}</div>
      <div>From Express</div>
      <div>fetch using: init options {`{cache: 'no-store'}`}</div>
    </main>
  );
}
