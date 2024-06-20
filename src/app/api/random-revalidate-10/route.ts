export const revalidate = 10;

export async function GET() {
  const currentDate = new Date().toISOString();
  return new Response(JSON.stringify({ currentDate }));
}
