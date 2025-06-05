// lib/gtag.ts
export const GA_TRACKING_ID = "G-0RKC8Z01C6";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
