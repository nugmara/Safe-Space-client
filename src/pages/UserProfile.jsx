import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileDetailsService } from "../services/profile.services";
import { followUser, unfollow } from "../services/following.services";

function UserPage() {
  const params = useParams();
  const { id } = params;
  const [profile, setProfile] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getProfileDetailsService(id);
      setProfile(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleFollowUser =async () => {
  //   try {
  //     if(!isFollowing){
  //       await followUser(id)
  //       return setIsFollowing(true)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  {
    console.log(profile);
  }
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
              <p className="followers-profile">
                Followers: {profile.profileDetails.totalFollowers}
              </p>
              <button className="follow-button">Follow</button>
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
