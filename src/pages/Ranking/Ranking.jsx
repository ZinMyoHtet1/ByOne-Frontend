import { useState } from "react";
import { dateFilterArrow } from "../../assets";
import { Button, RankingCard } from "../../components";
import { RankingCategory, RankingContainer } from "../../containers";
import "./ranking.css";

import { rankingList } from "../../db/lists";

const Ranking = () => {
  const [sliceIndex, setSliceIndex] = useState(8);

  const [loading, setLoading] = useState(false);
  const options = [
    { label: "Weekly", value: "week" },
    { label: "Monthly", value: "month" },
  ];

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setSliceIndex((prevValue) => prevValue * 2);
      setLoading(false);
    }, 3000);
  };

  return (
    <div id="ranking-page" className="tab-page">
      {/* {category} */}
      <RankingCategory />
      <div className="filter-container">
        <div className="date-filter">
          <select name="date">
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <img src={dateFilterArrow} alt="arrow-icon" className="date-arrow" />
        </div>
      </div>
      <RankingContainer>
        {rankingList.slice(0, sliceIndex).map((ranking, i) => (
          <RankingCard
            no={i + 1}
            name={ranking.name}
            battle={ranking.battle}
            win={ranking.win}
            key={ranking.name + i}
          />
        ))}
        {/* <RankingCard name="Harubusa" battle="130" win="111" score="50" />
        <RankingCard name="Harubusa" battle="172" win="98" score="50" />
        <RankingCard name="Harubusa" battle="55" win="40" score="50" />
        <RankingCard name="Harubusa" battle="100" win="80" score="50" />
        <RankingCard name="Harubusa" battle="130" win="111" score="50" />
        <RankingCard name="Harubusa" battle="172" win="98" score="50" />
        <RankingCard name="Harubusa" battle="55" win="40" score="50" /> */}
        {/*<RankingCard name="Harubusa" battle="100" win="80" score="50" />
        <RankingCard name="Harubusa" battle="130" win="111" score="50" />
        <RankingCard name="Harubusa" battle="172" win="98" score="50" />
        <RankingCard name="Harubusa" battle="55" win="40" score="50" />
        <RankingCard name="Harubusa" battle="100" win="80" score="50" />
        <RankingCard name="Harubusa" battle="130" win="111" score="50" />
        <RankingCard name="Harubusa" battle="172" win="98" score="50" />
        <RankingCard name="Harubusa" battle="55" win="40" score="50" /> */}
        {loading ? (
          <div className="loading">loading...</div>
        ) : sliceIndex < rankingList.length ? (
          <Button label="See More" handleClick={handleLoadMore} />
        ) : (
          "end result"
        )}
      </RankingContainer>

      <div className="your-ranking">
        <div className="label">Your Ranking!</div>
        <RankingCard name="Harubusa" battle="55" win="40" score="50" border />
      </div>
    </div>
  );
};

export default Ranking;
