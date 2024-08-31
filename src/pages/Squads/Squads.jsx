import { backBtnIcon, formkitBtn } from "../../assets";
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
        <img src={formkitBtn} alt="" className="formkit-btn btn" />
      </div>
      <div className="container">Hello</div>
    </div>
  );
};

export default Squads;
