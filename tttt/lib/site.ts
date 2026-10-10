export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const SITE_NAME = "Neweraplus Group of Companies";

export const CONTACT = {
  phone: "+234 805 123 4567",
  phoneHref: "tel:+2348051234567",
  email: "info@neweraplusgroup.com",
  address: "Ughelli, Delta State, Nigeria",
};

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Avoid double prefixing
  if (cleanPath.startsWith("/TEST/")) {
    return cleanPath;
  }

  if (BASE_PATH) {
    return `${BASE_PATH}${cleanPath}`;
  }

  if (typeof window !== "undefined" && window.location.pathname.startsWith("/TEST")) {
    return `/TEST${cleanPath}`;
  }

  return cleanPath;
}

