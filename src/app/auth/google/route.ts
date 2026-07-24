import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getAuthCallbackPath, getSafeNextPath } from "@/lib/auth/redirects";
import { getSiteOrigin } from "@/lib/auth/site-url";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const nextPath = getSafeNextPath(
    request.nextUrl.searchParams.get("next"),
    "/dashboard",
  );
  const isSignup = request.nextUrl.searchParams.get("mode") === "signup";
  const errorPath = isSignup
    ? "/signup?error=oauth-start"
    : "/login?error=oauth-start";
  const callbackUrl = new URL(
    getAuthCallbackPath(nextPath),
    getSiteOrigin(request.nextUrl.origin),
  );
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: callbackUrl.toString() },
  });

  if (error || !data.url) {
    return NextResponse.redirect(new URL(errorPath, request.url));
  }

  return NextResponse.redirect(data.url);
}
