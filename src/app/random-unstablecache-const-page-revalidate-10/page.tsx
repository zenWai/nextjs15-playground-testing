import { unstable_cache } from "next/cache";
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

export default async function RandomUnstableCacheConstRevalidatePage() {
  const getCachedRandomNumber = unstable_cache(
    async () => new Date().toISOString(),
    ["my-random-const-revalidate"],
  );
  const currentDate = await getCachedRandomNumber();
  return (
    <main>
      <div>{currentDate}</div>
      <div>new Date().toISOString() with unstable_cache</div>
      <div>using: export const revalidate = 10;</div>
      <Timer />
    </main>
  );
}
