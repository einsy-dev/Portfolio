export async function GET(req: Request): Promise<Response> {
  const name = new URL(req.url).pathname.split("/").pop();
  return Response.json({ name: name });
}
