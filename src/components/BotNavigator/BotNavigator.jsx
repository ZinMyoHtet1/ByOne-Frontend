/* eslint-disable react/prop-types */
import "./botnavigator.css";

const BotNavigator = ({ icon, label }) => {
  return (
    <div className="bot-nav">
      {icon}
      <div className="nav-label">{label}</div>
    </div>
  );
};

export default BotNavigator;
