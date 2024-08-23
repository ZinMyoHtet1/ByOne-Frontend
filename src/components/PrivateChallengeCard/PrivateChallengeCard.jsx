import { challengeArrowIcon, mlbbSmallImg } from "../../assets";
import "./private-challenge-card.css";

const PrivateChallengeCard = () => {
  return (
    <div className="private-challenge-card">
      <div className="challenge-header">
        <div className="challenger-profile">
          <img
            src="https://media.istockphoto.com/id/1481883388/photo/piggy-bank-and-money-coin-savings-concept-on-blue-background.webp?b=1&s=612x612&w=0&k=20&c=cVjAh0l7KaWFlRhdabMY2bFMxHDW_RH7RWiKcMdfDuw="
            alt="profile-avatar"
            className="profile-avatar"
          />
          <div className="profile-details">
            <div className="profile-name">Name</div>
            <div className="squad-name">squad name</div>
          </div>
        </div>
        <img src={mlbbSmallImg} alt="mlbb-logo-img" className="mlbb-logo-img" />
        <div className="date">4 days ago</div>
      </div>
      <div className="challenge-details-container">
        <div className="bet-card">
          <div className="bet-amount">Ks 5000</div>
        </div>
        <div className="player-profile">
          <img
            src="https://images.unsplash.com/photo-1724328617556-8882b88a12d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile-avatar"
            className="profile-avatar"
          />
          <div className="name">Nobito Squad</div>
          <div className="middle-text">
            <div className="text">challenge to</div>
            <img src={challengeArrowIcon} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateChallengeCard;
