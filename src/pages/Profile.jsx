import { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { followUser } from "../services/following.services";
import { getProfileDetailsService } from "../services/profile.services";
import { deleteAPost } from "../services/post.services";
import { getUserId } from "../services/auth.services";
import { AuthContext } from "../context/auth.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const { loggedUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await getProfileDetailsService();
      setProfile(response.data);
      console.log(response.data);
      setIsFollowing(response.data.isFollowing);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteAPost(id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div >
          <header className="profile-container">
            <div className="profile-header">
              <img
                className="image-header"
                src={profile.profileDetails.headerImage}
                alt="header-image"
              />
            </div>
            <div className="profile-left">
              <div className="username-profile">
                <h4>
                  <span>@</span>
                  {profile.profileDetails.username}
                </h4>
              </div>
              {/* <div className="first-last-name">
                <p>
                  {profile.profileDetails.firstName}{" "}
                  {profile.profileDetails.lastName}
                </p>
              </div> */}
              <div
                className="description-container"
                style={{ wordWrap: "break-word" }}
              >
                <p className="description-profile">
                  {profile.profileDetails.description}
                </p>
              </div>
              <div className="edit-profile-button">
                <Link to="/profile/edit">Edit profile</Link>
              </div>
              <p className="followers-profile">
                <span className="numbers-of-followers">
                  {profile.profileDetails.totalFollowers}
                </span>{" "}
                Followers
                <span className="numbers-of-followers"> 0</span> Following
              </p>
            </div>
            <div className="profile-right">
              <img
                src={profile.profileDetails.image}
                alt="profile-picture"
                className="image-profile"
              />
            </div>
            <hr /> 
          </header>
          {profile.postOfTheUser.map((eachPost) => {
            return (
              <div key={eachPost._id} className="post-profile-container">
                <div className="avatar-container">
                  {/* <img src={profile.profileDetails.image} alt="" width="40px" /> */}
                </div>
                <div className="post-profile-content">
                  <div className="post-header">
                    {/* <h2 className="post-profile-username">@{profile.profileDetails.username}</h2> */}
                    <span className="post-time">
                      {new Date(eachPost.time).toLocaleString()}
                    </span>
                  </div>
                  <p className="post-text" style={{ wordWrap: "break-word" }}>
                    {eachPost.content}
                  </p>
                  <div className="post-footer">
                    <span className="post-likes">
                      {eachPost.likes.length}❤️
                    </span>
                    <button className="post-delete-button" onClick={() => handleDelete(eachPost._id)}>Delete</button>
                  </div>
              <hr />
                </div>
              </div>
            );
          })}
      </div>
      )}
    </div>
  );
}

export default Profile;
