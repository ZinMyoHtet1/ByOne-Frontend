import { HistoryResultCard } from "../../components";
import "./historyList.css";

const HistoryList = () => {
  return (
    <div id="history-list">
      <div className="label">History</div>
      <div className="result-card-container">
        <HistoryResultCard
          amount="20000"
          result="win"
          date="2 days ago"
          contestants={["Your Squad", "Ninja Squad"]}
        />
        <HistoryResultCard
          amount="15000"
          result="lose"
          date="2 days ago"
          contestants={["Your Squad", "TTL Squad"]}
        />
        <HistoryResultCard
          amount="10000"
          result="win"
          date="2 days ago"
          contestants={["Your Squad", "Pro Squad"]}
        />
        <HistoryResultCard
          amount="15000"
          result="win"
          date="2 days ago"
          contestants={["Your Squad", "Moo Squad"]}
        />
      </div>
    </div>
  );
};

export default HistoryList;
