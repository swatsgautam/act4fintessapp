import React from "react";

const CircularProgress = ({ value, total, label }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = ((value / total) * circumference).toFixed(2);
  return (
    <div className="progress-circle">
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="lightgray"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="green"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="circle-content">
        <span className="value">{value}</span>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default CircularProgress;
