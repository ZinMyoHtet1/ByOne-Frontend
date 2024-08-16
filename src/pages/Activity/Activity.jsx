import { ActiveBattleCard } from "../../components";
import { ActiveAnalysis } from "../../containers";
import "./activity.css";

const Activity = () => {
  return (
    <div className="tab-page">
      <ActiveBattleCard />
      <ActiveAnalysis />
    </div>
  );
};

export default Activity;
