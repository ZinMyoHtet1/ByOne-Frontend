import { lockIcon, unlockIcon } from "../../assets";
import "./squad-card.css";

// eslint-disable-next-line react/prop-types
const SquadCard = ({ name, lock = false }) => {
  return (
    <div className="squad-card">
      <div className="squad-profile">
        <img
          src="https://plus.unsplash.com/premium_photo-1724288728486-fac5edbd0c84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
          alt="squad-avatar"
          className="squad-avatar"
        />
        <div className="squad-name">{name}</div>
      </div>
      <div className="lock-btn">
        <img src={lock ? lockIcon : unlockIcon} alt="icon" />
      </div>
    </div>
  );
};

export default SquadCard;
