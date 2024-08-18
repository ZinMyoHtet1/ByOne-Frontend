import { legendBadge, mlbbSmallImg } from "../../assets";
import FightButton from "../FightButton/FightButton";
import "./challenge-card.css";
const ChallengeCard = () => {
  return (
    <div className="challenge-card">
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
      <div className="challenge-card-container">
        <div className="high-rank">
          <div className="badge">
            <img src={legendBadge} alt="badge" />
          </div>
          <div className="text">high rank</div>
        </div>
        <div className="bet-card">
          <div className="bet-amount">Ks 5000</div>
        </div>
      </div>
      <FightButton />
      <div className="challenge-card-footer">
        <span className="box"></span>
        <span className="box"></span>
        <div className="winrate">
          winrate : <span>77%</span>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
