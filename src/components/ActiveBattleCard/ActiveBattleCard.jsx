import { alarmIcon } from "../../assets";
import "./active-battle-card.css";

const ActiveBattleCard = () => {
  return (
    <div id="active-battle-card">
      <div className="timer-container">
        <img src={alarmIcon} alt="alarm-icon" />
        <span className="timer">00:25:34</span>
        <span className="text">left to fight</span>
      </div>
      <div className="squad-container">
        <div className="squad">
          <img
            className="squad-icon"
            src="https://media.istockphoto.com/id/2112164167/photo/funny-jack-russell-terrier-dog-with-sunglasses-isolated-on-white-background-copy-space.webp?b=1&s=612x612&w=0&k=20&c=U76fwOnoa1v7nsTG0RrytAeTWJSx7p5FYk0BwO9AVJw="
            alt="squad-icon"
          />
          <div className="squad-name">My squad</div>
        </div>
        <div className="vs">vs</div>

        <div className="squad">
          <img
            className="squad-icon"
            src="https://media.istockphoto.com/id/2148065766/photo/monsters.webp?b=1&s=612x612&w=0&k=20&c=RpB083cYQAgpAfJiBXGbcUzspk47Ry7VKOkpRP_AW8o="
            alt="squad-icon"
          />
          <div className="squad-name">Felcon</div>
        </div>
      </div>
      <div className="contestant-container">
        <div className="contestants">
          {["You", "Josey", "Mira", "John Wich", "Haya"].map((name) => (
            <div className="player" key={`${name}1`}>
              <img
                src="https://plus.unsplash.com/premium_photo-1683133569392-f85efe0620ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNhcnRvb258ZW58MHx8MHx8fDA%3D"
                alt="profile-img"
                className="profile-img"
              />
              <div className="profile-name">{name}</div>
            </div>
          ))}
        </div>
        <div className="contestants">
          {["Omega", "Josey", "Mira", "John Wich", "Haya"].map((name) => (
            <div className="player" key={`${name}2`}>
              <img
                src="https://plus.unsplash.com/premium_photo-1681488340523-0f9fdef6f0c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNhcnRvb258ZW58MHx8MHx8fDA%3D"
                alt="profile-img"
                className="profile-img"
              />
              <div className="profile-name">{name}</div>
            </div>
          ))}
        </div>
        <div className="bet-amount">10000 Ks</div>
        <div className="more-btn">More Details &#8594;</div>
      </div>
    </div>
  );
};

export default ActiveBattleCard;
