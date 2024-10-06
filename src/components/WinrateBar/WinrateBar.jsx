/* eslint-disable react/prop-types */
import "./winrate-bar.css";

const WinrateBar = ({ winrate }) => {
  return (
    <div className="winrate-bar">
      Win Rate:
      <span className="progress-bar">
        <span
          className="progress-percent"
          style={{ width: `${winrate}%` }}
        ></span>
        <div className="percentage">{winrate}%</div>
      </span>
    </div>
  );
};

export default WinrateBar;
