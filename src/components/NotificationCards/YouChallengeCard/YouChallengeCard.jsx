/* eslint-disable react/prop-types */
import "./you-challenge.css";

const YouChallengeCard = ({ accepter = false, denier, seen = false }) => {
  return (
    <div className="noti-card">
      <div className="border-box">
        <span className="top-border"></span>
        <div className="noti-text">
          <span className="accepter">{accepter || denier}</span>
          {accepter
            ? ` accepted your challenge .Go check and fill out some other steps
for your challenge.`
            : ` denied your challenge. Let’s challenge to someone or you can
challenge with public post.`}
        </div>
        <div className="header">
          <div className="label">{`${
            accepter ? "Accept" : "Deny"
          } Your Challenge`}</div>
          <span className={`seen-circle ${seen ? "seen" : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default YouChallengeCard;
