import React, { useEffect, useState } from "react";

const styles = `
@keyframes wave {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(15deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(15deg); }
  60% { transform: rotate(-10deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
}

.wave {
  display: inline-block;
  transform-origin: 70% 70%;
  animation: wave 2s ease-in-out 6 forwards;

}
`;

if (typeof document !== "undefined" && !document.getElementById("wave-style")) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.id = "wave-style";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default function WavingHand() {
  const [isWaving, setIsWaving] = useState(true);

  useEffect(() => {
    // Stop waving after 6 seconds (3 iterations × 2s)
    const timer = setTimeout(() => setIsWaving(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      className={isWaving ? "wave" : ""}
      role="img"
      aria-label="waving hand"
      style={{ fontSize: "5rem" }}
    >
      👋
    </span>
  );
}