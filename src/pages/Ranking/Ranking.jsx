/* eslint-disable react/prop-types */
import { useState } from "react";
import { dateFilterArrow } from "../../assets";
import { Button, RankingCard } from "../../components";
import { RankingCategory, RankingContainer } from "../../containers";
import "./ranking.css";

const Ranking = ({ category }) => {
  const [loading, setLoading] = useState(false);
  const options = [
    { label: "Weekly", value: "week" },
    { label: "Monthly", value: "month" },
  ];
  console.log(category);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
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
        <RankingCard name="Harubusa" battle="100" win="80" score="50" />
        <RankingCard name="Harubusa" battle="130" win="111" score="50" />
        <RankingCard name="Harubusa" battle="172" win="98" score="50" />
        <RankingCard name="Harubusa" battle="55" win="40" score="50" />
        <RankingCard name="Harubusa" battle="100" win="80" score="50" />
        <RankingCard name="Harubusa" battle="130" win="111" score="50" />
        <RankingCard name="Harubusa" battle="172" win="98" score="50" />
        <RankingCard name="Harubusa" battle="55" win="40" score="50" />
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
        ) : (
          <Button label="See More" handleClick={handleLoadMore} />
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
