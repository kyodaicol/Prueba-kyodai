"use client";

import Script from "next/script";
import { BODY_HTML } from "./bodyMarkup";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Script src="/kyodai-app.js" strategy="afterInteractive" />
    </>
  );
}
