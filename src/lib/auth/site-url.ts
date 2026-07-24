export function getSiteOrigin(requestOrigin?: string | null): string {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  for (const candidate of [
    configuredSiteUrl,
    requestOrigin,
    "http://localhost:3000",
  ]) {
    if (!candidate) continue;
    try {
      return new URL(candidate).origin;
    } catch {
      continue;
    }
  }

  return "http://localhost:3000";
}
