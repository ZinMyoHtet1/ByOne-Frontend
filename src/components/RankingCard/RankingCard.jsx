/* eslint-disable react/prop-types */
import "./ranking-card.css";

const RankingCard = ({ no, name, battle, win, border = false, ...rest }) => {
  const winrate = Math.round((win / battle) * 1000) / 10;
  const score = Math.round((win * 3 * winrate) / 100);

  return (
    <div className={`ranking-card ${border ? "border" : ""}`} {...rest}>
      <span className="ranking-no">{no}</span>
      <span className="player-profile">
        <img
          src="https://images.unsplash.com/photo-1622567241543-9c707b4ddd5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
          alt="profile-avatar"
          className="player-avatar"
        />
        <div className="profile-name">{name}</div>
      </span>
      <span className="data-item battle">{battle}</span>
      <span className="data-item">{win}</span>
      <span className="data-item">{winrate}%</span>
      <span className="data-item">{score}</span>
    </div>
  );
};

export default RankingCard;
