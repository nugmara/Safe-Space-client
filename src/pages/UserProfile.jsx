import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileDetailsService } from "../services/profile.services";
import { followUser } from "../services/following.services";

function UserPage() {
  const params = useParams();
  const { id } = params;
  const [profile, setProfile] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [areFollowingEachOther, setAreFollowingEachOther] = useState(false);
  const [followUsers, setFollowUsers] = useState(false);
  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await getProfileDetailsService(id);
      setProfile(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  const followNewUser = async() => {
    try {
      await followUser(id)
      setAreFollowingEachOther(true)
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <div>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <div className="profile-container">
            <div className="profile-left">
              <div className="username-profile-another-user">
                <h4>
                  <span>@</span>
                  {profile.profileDetails.username}
                </h4>
              </div>
              <div className="first-last-name-another-user">
                <p>
                  {profile.profileDetails.firstName}{" "}
                  {profile.profileDetails.lastName}
                </p>
              </div>
              <p className="followers-profile-another-user">
                Followers: {profile.profileDetails.totalFollowers}
              </p>
              {areFollowingEachOther ? null : (
              <button className="follow-button" onClick={followNewUser}>Follow</button>
              )}
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
                  <p className="profile-content">{eachPost.content}</p>
                  <p className="profile-date">
                    {new Date(eachPost.time).toLocaleString()}
                  </p>
                </div>
                <div className="profile-details-container">
                  <p className="profile-details-likes">
                    {eachPost.totalLikes}❤️
                  </p>
                </div>
              </blockquote>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UserPage;
