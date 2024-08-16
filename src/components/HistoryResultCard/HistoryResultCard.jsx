/* eslint-disable react/prop-types */
import "./history-result-card.css";

const HistoryResultCard = ({ amount, result, date, contestants }) => {
  return (
    <div className="history-result-card">
      <div className={`result-circle ${result}`}>{result}</div>
      <div className="details">
        <div className="contestant-container">
          <div className="contestants">
            <span>{contestants[0]}</span> | <span>{contestants[1]}</span>
          </div>
          <div className="date">{date}</div>
        </div>
        <div className="bet-amount">{amount} Ks</div>
      </div>
    </div>
  );
};

export default HistoryResultCard;
