'use client'
import React from "react";
import { InlineWidget } from "react-calendly";

const Contact = () => {
  return (
    <>
      Want to work with me? Reach out via email or Book a meeting! <br />
      <a
        href="mailto:fuyuki325@gmail.com"
        className="text-blue-400 hover:underline"
      >
        fuyuki325@gmail.com
      </a>
      <div className="Apppy-6 font-primary">
      <InlineWidget url="https://calendly.com/fuyuki325/30min" />
    </div>
    </>
  );
};

export default Contact;
