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
      <div>
        <div className="text-red-600">
          - Build breaks with init options {`{cache: 'force-cache'}`} and
          without init options
        </div>
        <div>With express {`cache: 'force-cache'`} is working fine.</div>
        <div>
          To make it static using a different route with{" "}
          {`export const dynamic = 'force-static';`} but still forces me to
          fetch with {`cache: 'no-store'`} weird
        </div>
      </div>
    </main>
  );
}
