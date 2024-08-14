import { addIcon } from "../../assets";
import BotNavigator from "../../components/BotNavigator/BotNavigator";
import {
  ActivityIcon,
  ChallengeIcon,
  ProfileIcon,
  RankingIcon,
} from "../../svg/botNavigationIcon";
import "./bottomnavi.css";

const BottomNavigation = () => {
  return (
    <div id="bottom-navigation">
      <div className="tab-container">
        <BotNavigator icon={<ActivityIcon />} label="Activity" />
        <BotNavigator icon={<ChallengeIcon />} label="Challenge" />
        <BotNavigator icon={<RankingIcon />} label="Ranking" />
        <BotNavigator icon={<ProfileIcon />} label="Profile" />

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
