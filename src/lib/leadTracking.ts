const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export function getLeadTracking() {
  const query = new URLSearchParams(window.location.search);
  const attribution = Object.fromEntries(
    attributionKeys
      .map((key) => [key, query.get(key)])
      .filter((entry): entry is [string, string] => Boolean(entry[1])),
  );

  return {
    pageUrl: window.location.href,
    ...attribution,
  };
}
