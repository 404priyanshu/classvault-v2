import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSafeNextPath } from "@/lib/auth/redirects";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const code = request.nextUrl.searchParams.get("code");
  const nextPath = getSafeNextPath(
    request.nextUrl.searchParams.get("next"),
    "/dashboard",
  );

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL(nextPath, request.url));
  }

  return NextResponse.redirect(new URL("/login?error=callback", request.url));
}
