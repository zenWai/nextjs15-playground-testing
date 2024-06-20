import NextDynamic from "next/dynamic";

const Timer = NextDynamic(() => import("@/components/timer"), {
  ssr: false,
  loading: () => (
    <div>
      <p>Timer: 0.00 seconds</p>
    </div>
  ),
});

export default async function FromExpressInitOptRevalidate10Page() {
  const response = await fetch("http://localhost:2999/", {
    next: { revalidate: 10 },
  });
  const fromExpress = await response.json();
  return (
    <main>
      <div>{fromExpress.date}</div>
      <div>From Express</div>
      <div>fetch using: init options {`next: {revalidate: 10}`}</div>
      <Timer />
    </main>
  );
}
