export default async function FromRHNoInitOptPage() {
  /*const response = await fetch('http://localhost:3000/api/random');
  const fromRH = await response.json();*/
  return (
    <main>
      {/*<div>{fromRH.currentDate}</div>*/}
      <div>From /api/random route</div>
      <div>fetch using: no init options</div>
      <div className="text-red-600">
        With /api/random or /api/random-cached it breaks the build
      </div>
    </main>
  );
}
