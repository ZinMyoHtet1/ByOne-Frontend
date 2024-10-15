import { backBtnIcon } from "../../assets";
import { Button, SearchBar, SearchSquadCard } from "../../components";
import "./squads.css";

import { searchSquadList } from "../../db/lists";
import { useState } from "react";

const Squads = () => {
  const [loading, setLoading] = useState(false);
  const [sliceIndex, setSliceIndex] = useState(8);

  const handleLoadMore = () => {
    if (sliceIndex < searchSquadList.length) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSliceIndex((prev) => prev + 8);
      }, 3000);
    }
  };

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
        {searchSquadList.slice(0, sliceIndex).map((squad, i) => (
          <SearchSquadCard key={squad.name + i} data={squad} />
        ))}
        {/* <SearchSquadCard winrate={80} />
        <SearchSquadCard winrate={70} />
        <SearchSquadCard winrate={60} /> */}
      </div>
      {loading ? (
        "loading"
      ) : sliceIndex < searchSquadList.length ? (
        <Button label="See More" handleClick={handleLoadMore} />
      ) : (
        "end of result"
      )}
    </div>
  );
};

export default Squads;
