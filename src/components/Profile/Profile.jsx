import './Profile.css'
import { useHistory } from "react-router-dom";

export const Profile = () => {
  const history =useHistory()
  const handleLogout = () => {
    history.push("/")
  };
  return (
    <div className="profile-con">
      <div>Welcome </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
