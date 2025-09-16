import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/messages/[id]">,
) {
  const { id } = await ctx.params;

  const url = `${process.env.API_URL}/messages/${id}`;
  const res = await fetch(url);

  const data = await res.json();
  return Response.json(data);
}
