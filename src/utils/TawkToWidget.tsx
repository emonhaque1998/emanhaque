"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TawkToWidget = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];

      s1.async = true;
      s1.src = "https://embed.tawk.to/687fe85a29adad191a62a87e/1j0pq792f";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");

      s0?.parentNode?.insertBefore(s1, s0);
    }
  }, []);

  return null;
};

export default TawkToWidget;
