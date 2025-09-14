export const dynamic = "force-static";

export async function GET() {
  const url = `${process.env.API_URL}/conversations`;
  const res = await fetch(url);
  const data = await res.json();
  return Response.json(data);
}
