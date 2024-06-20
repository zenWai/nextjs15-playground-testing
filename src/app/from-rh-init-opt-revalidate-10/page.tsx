import NextDynamic from "next/dynamic";

const Timer = NextDynamic(() => import("@/components/timer"), {
  ssr: false,
  loading: () => (
    <div>
      <p>Timer: 0.00 seconds</p>
    </div>
  ),
});
export default async function FromRHInitOptRevalidate10Page() {
  /*const response = await fetch('http://localhost:3000/api/random',
    {
      next: {revalidate: 10},
    });
  const fromRH = await response.json();*/
  return (
    <main>
      {/*<div>{fromRH.currentDate}</div>*/}
      <div>From /api/random route</div>
      <div>fetch using: init options {`next: {revalidate: 10}`}</div>
      <div className="text-red-600">
        With /api/random or /api/random-cached it breaks the build
      </div>
      <Timer />
    </main>
  );
}
