import { unstable_cache } from "next/cache";

export default async function RandomUnstableCachePage() {
  const getCachedRandomNumber = unstable_cache(
    async () => new Date().toISOString(),
    ["my-random"],
  );
  const currentDate = await getCachedRandomNumber();
  return (
    <main>
      <div>{currentDate}</div>
      <div>new Date().toISOString() with unstable_cache</div>
    </main>
  );
}
