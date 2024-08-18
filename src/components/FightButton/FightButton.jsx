import { knifeIcon } from "../../assets";
import "./fight-button.css";

const FightButton = () => {
  return (
    <div className="fight-button btn">
      <img src={knifeIcon} alt="knife-icon" />
      <div className="label">Fight</div>
    </div>
  );
};

export default FightButton;
