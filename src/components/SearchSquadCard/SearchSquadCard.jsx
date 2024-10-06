/* eslint-disable react/prop-types */
import "./searchsquadcard.css";

import { clipboardIcon } from "../../assets";
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
      <div className="bottom-container">Bottom</div>
    </div>
  );
};

export default SearchSquadCard;
