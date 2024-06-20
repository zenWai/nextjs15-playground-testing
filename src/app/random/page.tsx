export default function RandomPage() {
  const currentDate = new Date().toISOString();
  return (
    <main>
      <div>{currentDate}</div>
      <div>new Date().toISOString()</div>
    </main>
  );
}
