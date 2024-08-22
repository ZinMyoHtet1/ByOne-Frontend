import {
  addPlusIcon,
  legendBadge,
  mythicBadge,
  profileCoverImg,
} from "../../assets";
import { SquadCard } from "../../components";
import "./profile-details.css";

const ProfileDetails = () => {
  return (
    <div id="profile-details-container">
      <div className="cover-img">
        <img src={profileCoverImg} alt="profile-cover" />
      </div>
      <div className="details-container">
        <div className="profile-container">
          <img
            src="https://images.unsplash.com/photo-1720491468850-368cd24ce9d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
            alt="profile-avatar"
            className="profile-avatar"
          />
          <div className="profile-name">Player Name</div>
        </div>
        <div className="analysis-container">
          <div className="rank-squad">
            <div className="rank-details">
              <div className="current-rank">
                <div className="rank-badge">
                  <img src={legendBadge} alt="rank-badge" />
                </div>
                <div className="text">current</div>
              </div>
              <div className="high-rank">
                <div className="rank-badge">
                  <img src={mythicBadge} alt="rank-badge" />
                </div>
                <div className="text">high</div>
              </div>
            </div>
            <div className="profile-squad-container">
              <div className="header">
                <div className="title">My Squads</div>
                <img
                  src={addPlusIcon}
                  alt="add-plus-icon"
                  className="add-squad-btn"
                />
              </div>
              <div className="squad-container">
                <SquadCard name="Gangsters" />
                <SquadCard name="Shawdow Team" lock />
              </div>
            </div>
          </div>
          <div className="analysis-container">anaysis</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
