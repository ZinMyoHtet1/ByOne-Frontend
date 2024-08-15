/* eslint-disable react/prop-types */
import {
  ActivityIcon,
  ChallengeIcon,
  ProfileIcon,
  RankingIcon,
} from "../../svg/botNavigationIcon";
import "./botnavigator.css";

import { NavLink } from "react-router-dom";

const BotNavigator = ({ type }) => {
  switch (type) {
    case "activity":
      return (
        <NavLink
          to="/activity"
          className={({ isActive }) =>
            isActive ? "bot-nav active" : "bot-nav"
          }
        >
          <ActivityIcon fill="#9747FF" />
          <div className="nav-label">Activity</div>
        </NavLink>
      );
    case "challenge":
      return (
        <NavLink
          to="/challenge"
          className={({ isActive }) =>
            isActive ? "bot-nav active" : "bot-nav"
          }
        >
          <ChallengeIcon />
          <div className="nav-label">Challenge</div>
        </NavLink>
      );
    case "ranking":
      return (
        <NavLink
          to="/ranking"
          className={({ isActive }) =>
            isActive ? "bot-nav active" : "bot-nav"
          }
        >
          <RankingIcon />
          <div className="nav-label">Ranking</div>
        </NavLink>
      );
    case "profile":
      return (
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "bot-nav active" : "bot-nav"
          }
        >
          <ProfileIcon />
          <div className="nav-label">Profile</div>
        </NavLink>
      );
    default:
      return null;
  }
};

export default BotNavigator;
