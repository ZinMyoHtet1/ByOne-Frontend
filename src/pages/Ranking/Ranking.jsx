/* eslint-disable react/prop-types */
import { dateFilterArrow } from "../../assets";
import { RankingCard } from "../../components";
import { RankingCategory, RankingContainer } from "../../containers";
import "./ranking.css";

const Ranking = ({ category }) => {
  const options = [
    { label: "Weekly", value: "week" },
    { label: "Monthly", value: "month" },
  ];
  console.log(category);
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
        <RankingCard name="Harubusa" battle="100" win="80" score="50" />
        <RankingCard name="Harubusa" battle="130" win="111" score="50" />
        <RankingCard name="Harubusa" battle="172" win="98" score="50" />
        <RankingCard name="Harubusa" battle="55" win="40" score="50" />
        <RankingCard name="Harubusa" battle="100" win="80" score="50" />
        <RankingCard name="Harubusa" battle="130" win="111" score="50" />
        <RankingCard name="Harubusa" battle="172" win="98" score="50" />
        <RankingCard name="Harubusa" battle="55" win="40" score="50" />
      </RankingContainer>
    </div>
  );
};

export default Ranking;
