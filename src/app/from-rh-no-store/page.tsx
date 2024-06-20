export default async function FromRHNoStorePage() {
  const response = await fetch("http://localhost:3000/api/random", {
    cache: "no-store",
  });
  const fromRH = await response.json();
  return (
    <main>
      <div>{fromRH.currentDate}</div>
      <div>From /api/random route</div>
      <div>fetch using: init options {`{cache: 'no-store'}`}</div>
    </main>
  );
}
