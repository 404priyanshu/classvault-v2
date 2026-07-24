import type { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/update-session";

export async function proxy(request: NextRequest): Promise<NextResponse> {
  return updateSession(request);
}

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding/:path*", "/login", "/signup"],
};
