/* eslint-disable react/prop-types */
import "./searchsquadcard.css";

import { battleAxeIcon, clipboardIcon, memberIcon } from "../../assets";
import WinrateBar from "../WinrateBar/WinrateBar";

const SearchSquadCard = ({ winrate }) => {
  return (
    <div className="search-squad-card">
      <div className="top-container">
        <div className="profile">
          <div className="left">
            <div className="name">Squad Name</div>
            <div className="id-container">
              <div className="id">234448839233</div>
              <img
                src={clipboardIcon}
                alt="clipboard-icon"
                className="clipboard-icon btn"
              />
            </div>
          </div>

          <div className="profile-img">
            <img
              src="https://images.unsplash.com/photo-1594652634010-275456c808d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="squad-profile-img"
            />
          </div>
        </div>

        <WinrateBar winrate={winrate} />
      </div>
      <div className="bottom-container">
        <div className="battle-item">
          <img src={battleAxeIcon} alt="battle-axe-icon" />
          <span className="battle-number">133</span>
          <span className="label">battles</span>
        </div>
        <div className="member-item">
          <img src={memberIcon} alt="member-icon" />
          <span className="member-number">6</span>
          <span className="label">members</span>
        </div>
      </div>
      <div className="request-btn btn">Request Join</div>
    </div>
  );
};

export default SearchSquadCard;
