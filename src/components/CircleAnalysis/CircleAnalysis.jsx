/* eslint-disable react/prop-types */
import "./circle-analysis.css";

const CircleAnalysis = ({ amount, label, color = "#7678ED", size = "" }) => {
  return (
    <div className="circle-analysis">
      <div
        className={`circle ${size}`}
        style={{ border: `6px solid ${color}` }}
      >
        <div className={`amount ${size}`}>{amount}</div>
        <div className={`label ${size}`} style={{ color: color }}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default CircleAnalysis;
