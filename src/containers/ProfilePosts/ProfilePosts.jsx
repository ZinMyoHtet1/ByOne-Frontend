import { useState } from "react";
import "./profile-post.css";

const ProfilePosts = () => {
  const [option, setOption] = useState("public");
  const handleOption = (e) => {
    const option = e.target.innerText.toLowerCase();
    setOption(option);
  };
  return (
    <div className="profile-post-container">
      <div className="profile-post-navbar">
        <div className="categorys">
          <div
            className={`post-category ${option == "public" ? "selected" : ""}`}
            onClick={handleOption}
          >
            Public
          </div>
          <div
            className={`post-category ${option == "private" ? "selected" : ""}`}
            onClick={handleOption}
          >
            Private
          </div>
        </div>
        <div className="text">Challenges</div>
      </div>
      {option}
    </div>
  );
};

export default ProfilePosts;
