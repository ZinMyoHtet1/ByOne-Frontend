import { ProfileDetails, ProfilePosts } from "../../containers";
import "./profile.css";

const Profile = () => {
  return (
    <div id="profile-page" className="tab-page">
      <ProfileDetails />
      <div className="create-btn">Create New Challenge</div>
      <ProfilePosts />
    </div>
  );
};

export default Profile;
