export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const url = `${process.env.API_URL}/messages/${id}`;
  const res = await fetch(url);

  const data = await res.json();
  return Response.json(data);
}
