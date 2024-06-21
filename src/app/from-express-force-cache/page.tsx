export default async function FromExpressForceCachePage() {
  const response = await fetch("http://localhost:2999/", {
    cache: "force-cache",
  });
  const fromExpress = await response.json();
  return (
    <main>
      <div>{fromExpress.date}</div>
      <div>From Express</div>
      <div>fetch using: init options {`{cache: 'force-cache'}`}</div>
    </main>
  );
}
