import { addIcon } from "../../assets";
import BotNavigator from "../../components/BotNavigator/BotNavigator";

import "./bottomnavi.css";

const BottomNavigation = () => {
  return (
    <div id="bottom-navigation">
      <div className="tab-container">
        <BotNavigator type="activity" />
        <BotNavigator type="challenge" />
        <BotNavigator type="ranking" />
        <BotNavigator type="profile" />

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
