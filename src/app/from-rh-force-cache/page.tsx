export default async function FromRHForceCachedPage() {
  const response = await fetch("http://localhost:3000/api/random-cached", {
    cache: "no-store",
  });
  /*const response = await fetch('http://localhost:3000/api/random-cached', {
    cache: 'force-cache'
  });*/
  const fromRHCached = await response.json();
  return (
    <main>
      <div>{fromRHCached.currentDate}</div>
      <div>From /api/random-cached route</div>
      <div>RH using: export const dynamic = force-static;</div>
      <div>fetch using: init options {`{cache: 'no-store'}`}</div>
    </main>
  );
}
