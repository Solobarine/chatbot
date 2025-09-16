import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/conversations/[id]">,
) {
  const { id } = await ctx.params;

  const url = `${process.env.API_URL}/conversations/${id}`;
  const res = await fetch(url);

  const data = await res.json();
  return Response.json(data);
}

export async function DELETE(
  _req: NextRequest,
  ctx: RouteContext<"/api/conversations/[id]">,
) {
  const { id } = await ctx.params;

  const url = `${process.env.API_URL}/conversations/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });

  const data = await res.json();
  return Response.json(data);
}
