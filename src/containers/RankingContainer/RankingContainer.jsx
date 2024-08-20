/* eslint-disable react/prop-types */
import "./ranking-container.css";

const RankingContainer = ({ children }) => {
  return (
    <div className="ranking-container">
      <div className="ranking-header">
        <span className="player-name">Name</span>
        <span className="header-item">battle</span>
        <span className="header-item">win</span>
        <span className="header-item">winrate</span>
        <span className="header-item">score</span>
      </div>
      <div className="ranking-card-container">{children}</div>
    </div>
  );
};

export default RankingContainer;
