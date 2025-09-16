import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const url = `${process.env.API_URL}/conversations/${id}`;
  const res = await fetch(url);

  const data = await res.json();
  return Response.json(data);
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const url = `${process.env.API_URL}/conversations/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });

  const data = await res.json();
  return Response.json(data);
}
