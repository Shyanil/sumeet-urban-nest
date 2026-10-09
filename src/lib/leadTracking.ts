const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
] as const;

const trackingStorageKey = "sumeeturbannest_attribution";

export function captureLeadTracking(): Record<string, string> {
  const query = new URLSearchParams(window.location.search);
  const current = Object.fromEntries(
    attributionKeys
      .map((key) => [key, query.get(key)])
      .filter((entry): entry is [string, string] => Boolean(entry[1])),
  );
  let saved: Record<string, string> = {};
  try {
    const parsed: unknown = JSON.parse(window.sessionStorage.getItem(trackingStorageKey) ?? "{}");
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      saved = Object.fromEntries(Object.entries(parsed).filter((entry) => typeof entry[1] === "string"));
    }
  } catch {
    // Tracking still works with current URL parameters when storage is unavailable.
  }
  const attribution = {
    ...saved,
    ...current,
    landingPageUrl: saved.landingPageUrl || window.location.href,
    referrer: saved.referrer ?? document.referrer,
  };
  try {
    window.sessionStorage.setItem(trackingStorageKey, JSON.stringify(attribution));
  } catch {
    // Private browsing/storage restrictions should never prevent an enquiry.
  }
  return attribution;
}

export function redirectToThankYou() {
  // A new document is intentional: GTM page-load conversion triggers need
  // to initialize with /thank-you as the actual page URL.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.assign("/thank-you");
}

export function getLeadTracking() {
  return {
    ...captureLeadTracking(),
    pageUrl: window.location.href,
  };
}
