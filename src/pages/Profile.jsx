import { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { followUser } from "../services/following.services";
import { getProfileDetailsService } from "../services/profile.services";
import { deleteAPost } from "../services/post.services";
import { getUserId } from "../services/auth.services";
import { AuthContext } from "../context/auth.context";

function Profile() {
  const { loggedUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await getProfileDetailsService();
      setProfile(response.data);
      console.log(response.data)
      setIsFollowing(response.data.isFollowing);
      setIsFetching(false);
    } catch (error) {
    console.log(error)
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteAPost(id);
      getData()
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <div className="profile-container">
            <div className="profile-left">
              <div className="username-profile">
                <h4>
                  <span>@</span>
                  {profile.profileDetails.username}
                </h4>
              </div>
              <div className="first-last-name">
                <p>
                  {profile.profileDetails.firstName}{" "}
                  {profile.profileDetails.lastName}
                </p>
              </div>
              <p className="followers-profile">Followers: {profile.profileDetails.totalFollowers}</p>
              <p className="description-profile">{profile.profileDetails.description}</p>
            </div>
            <div className="profile-right">
              <img
                src={profile.profileDetails.image}
                alt="profile-picture"
                width="150px"
                className="image-profile"
              />
            </div>
          </div>
          <hr />
          {profile.postOfTheUser.map((eachPost) => {
            return (
              <blockquote key={eachPost._id} className="profile-blockquote">
                <div className="profile-container-wrapper">
                  <p
                    className="profile-content"
                    style={{ wordWrap: "break-word" }}
                  >
                    {eachPost.content}
                  </p>
                  <p className="profile-date">
                    {new Date(eachPost.time).toLocaleString()}
                  </p>
                </div>
                <div className="profile-details-container">
                  <p className="profile-details-likes">
                    {eachPost.totalLikes}❤️
                  </p>
                  <button
                    onClick={() => handleDelete(eachPost._id)}
                    className="profile-details-button-remove"
                  >
                    Remove
                  </button>
                </div>
              </blockquote>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Profile;
