import React from "react";

/**
 * Reusable text block with title, underline, and body copy.
 *
 * Usage:
 * <TextBlock
 *   title="Forward Festival Berlin"
 *   body="We attended the Forward Festival in Berlin, a conference focused on design, creativity, and culture. It offered space to step back, listen, and recalibrate our thinking."
 * />
 */
const TextBlock = ({ title, body, className = "", marginBottom = "mb-24" }) => {
  return (
    <section className={`w-full ${marginBottom} px-6 md:px-8 max-w-5xl mx-auto ${className}`}>
      <h2 className="font-title text-[28px] leading-tight tracking-tight text-foreground">
        {title}
      </h2>
      <hr className="mt-3 mb-4 h-px w-full border-0 bg-border" />
      <p className="font-body text-[16px] leading-relaxed text-foreground/90">
        {body}
      </p>
    </section>
  );
};

export default TextBlock;

