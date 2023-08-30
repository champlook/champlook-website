"use client";
import Script from "next/script";
import React from "react";

export const Form = () => {
  return (
    <div>
      {" "}
      {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScQT3SH9NI5RP3iZBa0BbStlFgdrPczMacd_gSrzNA4dyRsJA/viewform?embedded=true"
        width="1040"
        height="1002"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe> */}
      <iframe
        data-tally-src="https://tally.so/r/wzydN1?transparentBackground=1"
        width="1000px"
        height="1000px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Registration form"
      ></iframe>
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          Tally.loadEmbeds();
        }}
      />
    </div>
  );
};
