import React from "react";

const ArrowComponent = () => {
  return (
    <div className="arrow-page">
      <svg className="long-arrow" width="1000" height="50">
        <line x1="0" y1="25" x2="950" y2="25" stroke="black" strokeWidth="4" />
        <polygon points="950,15 990,25 950,35" fill="black" />
      </svg>
      <div className="target">👉 This is the target</div>
    </div>
  );
};
export default ArrowComponent