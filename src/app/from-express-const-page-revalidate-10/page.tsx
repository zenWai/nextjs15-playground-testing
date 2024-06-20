import NextDynamic from "next/dynamic";

export const revalidate = 10;

const Timer = NextDynamic(() => import("@/components/timer"), {
  ssr: false,
  loading: () => (
    <div>
      <p>Timer: 0.00 seconds</p>
    </div>
  ),
});

export default async function FromExpressConstPageRevalidate10Page() {
  const response = await fetch("http://localhost:2999/");
  const fromExpress = await response.json();
  return (
    <main>
      <div>{fromExpress.date}</div>
      <div>From Express</div>
      <div>fetch using: No init options</div>
      <div>page using: export const revalidate = 10;</div>
      <Timer />
    </main>
  );
}
