import NextDynamic from "next/dynamic";

const Timer = NextDynamic(() => import("@/components/timer"), {
  ssr: false,
  loading: () => (
    <div>
      <p>Timer: 0.00 seconds</p>
    </div>
  ),
});

export const revalidate = 10;

export default async function FromRHConstRevalidate10Page() {
  const response = await fetch("http://localhost:3000/api/random", {
    cache: "no-store",
  });
  const fromRH = await response.json();
  return (
    <main>
      <div>{fromRH.currentDate}</div>
      <div>From /api/random route</div>
      <div>
        fetch using: init options {`{cache: 'no-store'}`} because any other init
        option breaks the build
      </div>
      <div>page using: export const revalidate = 10;</div>
      <Timer />
    </main>
  );
}
