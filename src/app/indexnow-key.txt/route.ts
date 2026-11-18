// Serves the IndexNow ownership key at /indexnow-key.txt. Set INDEXNOW_KEY (8-128 chars, a-z A-Z 0-9 -).
export const dynamic = "force-dynamic";

export function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!key || !/^[a-zA-Z0-9-]{8,128}$/.test(key)) return new Response("Not found", { status: 404 });
  return new Response(key, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
