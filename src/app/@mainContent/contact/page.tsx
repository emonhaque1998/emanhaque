"use client";
import BossLoading from "@/components/BossLoading";
import CallWrite from "@/components/Contact/CallWrite";
import GetTouch from "@/components/Contact/GetTouch";
import Footer from "@/components/Footer";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import { useEffect, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  return (
    <>
      {loading ? (
        <BossLoading />
      ) : (
        <>
          <CallWrite />
          <GetTouch />
          <HorizontalRowDotted />
          <Footer />
        </>
      )}
    </>
  );
}
