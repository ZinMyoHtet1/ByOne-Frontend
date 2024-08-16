import { ActiveBattleCard } from "../../components";
import { ActiveAnalysis, HistoryList } from "../../containers";
import "./activity.css";

const Activity = () => {
  return (
    <div className="tab-page">
      <ActiveBattleCard />
      <ActiveAnalysis />
      <HistoryList />
    </div>
  );
};

export default Activity;
