export function getSafeNextPath(value: string | null, fallback: string): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return fallback;

  try {
    const parsedUrl = new URL(value, "http://classvault.local");
    if (parsedUrl.origin !== "http://classvault.local") return fallback;
    return `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
  } catch {
    return fallback;
  }
}

export function getAuthCallbackPath(nextPath: string): string {
  const searchParams = new URLSearchParams({ next: nextPath });
  return `/auth/callback?${searchParams.toString()}`;
}
