export async function POST(req: Request) {
  const body = await req.json();

  const url = `${process.env.API_URL}/messages`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return Response.json(data);
}
