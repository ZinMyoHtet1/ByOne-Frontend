/* eslint-disable react/prop-types */

import BotNavigator from "./BotNavigator/BotNavigator";
import {
  ActivityIcon,
  ChallengeIcon,
  RankingIcon,
  ProfileIcon,
} from "../svg/botNavigationIcon";

const BotNavigatorController = ({ control }) => {
  switch (control) {
    case "activity":
      return (
        <BotNavigator
          outlineIcon={<ActivityIcon />}
          fillIcon={<ActivityIcon fill />}
          label="Activity"
          to="/activity"
        />
      );
    case "challenge":
      return (
        <BotNavigator
          outlineIcon={<ChallengeIcon />}
          fillIcon={<ChallengeIcon fill />}
          label="Challenge"
          to="/challenge"
        />
      );
    case "ranking":
      return (
        <BotNavigator
          outlineIcon={<RankingIcon />}
          fillIcon={<RankingIcon fill />}
          label="Ranking"
          to="/ranking"
        />
      );
    case "profile":
      return (
        <BotNavigator
          outlineIcon={<ProfileIcon />}
          fillIcon={<ProfileIcon fill />}
          label="Profile"
          to="/profile"
        />
      );
    default:
      return null;
  }
};

export default BotNavigatorController;
