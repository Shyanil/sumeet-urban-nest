export type LeadType = "website_lead" | "landing_page_lead";
export type LeadForm = "contact-section" | "enquiry-panel" | "site-visit" | "home-2";

export const leadCookieName = "sumeet_lead_receipt";
export const receiptLifetimeSeconds = 15 * 60;
export const validForms: LeadForm[] = ["contact-section", "enquiry-panel", "site-visit", "home-2"];
export const isSubmissionId = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

// This is server deployment context, never a query parameter or submitted lead_type.
// A second deployment may opt into landing_page_lead only after its actual URL is verified.
export function getSiteLeadType(): LeadType {
  const value = process.env.LEAD_SITE_TYPE ?? "website_lead";
  if (value !== "website_lead" && value !== "landing_page_lead") throw new Error("Invalid lead site type.");
  return value;
}

export async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function signingKey(secret: string) {
  return crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

export async function createLeadReceipt(id: string, leadType: LeadType, form: LeadForm, secret: string) {
  const payload = `v1.${id}.${leadType}.${form}`;
  const signature = await crypto.subtle.sign("HMAC", await signingKey(secret), new TextEncoder().encode(payload));
  const hex = Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${payload}.${hex}`;
}

export async function verifyLeadReceipt(token: string, secret: string) {
  const [version, id, leadType, form, signature, extra] = token.split(".");
  if (version !== "v1" || !isSubmissionId(id) || extra !== undefined ||
    !["website_lead", "landing_page_lead"].includes(leadType) ||
    !validForms.includes(form as LeadForm) || !/^[0-9a-f]{64}$/.test(signature ?? "")) return null;
  const bytes = Uint8Array.from(signature.match(/.{2}/g)!, (byte) => parseInt(byte, 16));
  const valid = await crypto.subtle.verify("HMAC", await signingKey(secret), bytes,
    new TextEncoder().encode(`${version}.${id}.${leadType}.${form}`));
  return valid ? { id, leadType: leadType as LeadType, form: form as LeadForm } : null;
}
