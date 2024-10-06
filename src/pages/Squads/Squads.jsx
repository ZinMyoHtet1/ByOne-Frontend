import { backBtnIcon } from "../../assets";
import { SearchBar, SearchSquadCard } from "../../components";
import "./squads.css";

const Squads = () => {
  return (
    <div className="full-page" id="squad-page">
      <div className="navbar">
        <img
          src={backBtnIcon}
          alt="back-btn"
          className="back-btn btn"
          onClick={() => history.go(-1)}
        />
        <div className="label">Squads</div>
        {/* <img src={formkitBtn} alt="" className="formkit-btn btn" /> */}
      </div>

      <div className="searchbar-container">
        <SearchBar placeholder="Search by id" />
        <SearchBar placeholder="Search by name" />
      </div>
      <div className="content-container">
        <SearchSquadCard winrate={50} />
        <SearchSquadCard winrate={80} />
        <SearchSquadCard winrate={70} />
        <SearchSquadCard winrate={60} />
      </div>
    </div>
  );
};

export default Squads;
