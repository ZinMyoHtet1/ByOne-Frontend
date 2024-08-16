import { CircleAnalysis } from "../../components";
import "./active-analysis.css";

const ActiveAnalysis = () => {
  return (
    <div id="active-analysis-card">
      <CircleAnalysis amount="145" label="total" />
      <CircleAnalysis
        amount="84.8%"
        label="win rate"
        size="large"
        color="#F7B267"
      />
      <CircleAnalysis amount="123" label="win" color="#2DD112" />
      <div className="bottom-bar"></div>
    </div>
  );
};

export default ActiveAnalysis;
