import { addIcon } from "../../assets";
import { BotNavigatorController } from "../../components";

import "./bottomnavi.css";

const BottomNavigation = () => {
  return (
    <div id="bottom-navigation">
      <div className="tab-container">
        <BotNavigatorController control="activity" />
        <BotNavigatorController control="challenge" />
        <BotNavigatorController control="ranking" />
        <BotNavigatorController control="profile" />

        <div className="create-challenge-btn">
          <div className="white-circle">
            <img src={addIcon} alt="add-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
