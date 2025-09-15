export const dynamic = "force-static";

export async function GET() {
  const url = `${process.env.API_URL}/conversations`;
  const res = await fetch(url);
  const data = await res.json();
  return Response.json(data);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const url = `${process.env.API_URL}/conversations`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      return Response.json(
        { message: "Failed to create conversation", error },
        { status: res.status },
      );
    }

    const data = await res.json();

    return Response.json(data);
  } catch (err) {
    console.error("Conversation creation error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
