import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = Object.fromEntries(request.nextUrl.searchParams);
  return Response.json({
    req: { query: params },
  });
}
