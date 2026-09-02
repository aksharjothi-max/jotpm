import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = process.env.GITHUB_TOKEN;
  return NextResponse.json({
    hasToken: !!token,
    tokenLength: token?.length || 0,
    tokenStart: token?.slice(0, 4) + "...",
  });
}
