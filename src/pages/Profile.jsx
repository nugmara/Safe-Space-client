import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { followUser, unfollow } from "../services/following.services";
import { getProfileDetailsService } from "../services/profile.services";
import { getUserId } from "../services/auth.services";

function Profile() {
  const params = useParams();
  const { id } = params;
  const [profile, setProfile] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    getData();
  }, [id]);
  const getData = async () => {
    try {
      const response = await getProfileDetailsService(id);
      setProfile(response.data);
      setIsFollowing(response.data.isFollowing);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFollow = async () => {
    try {
      if (!isFollowing) {
        await followUser(id);
        setIsFollowing(true);
        setProfile((refreshProfile) => ({
          profileDetails: {
            ...refreshProfile.profileDetails,
            totalFollowers: refreshProfile.profileDetails.totalFollowers + 1,
          },
        }));
      } else {
        await unfollow(id);
        setIsFollowing(false);
        setProfile((refreshProfile) => ({
          ...refreshProfile,
          profileDetails: {
            ...refreshProfile.profileDetails,
            totalFollowers: refreshProfile.profileDetails.totalFollowers - 1,
          },
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // {console.log(profile)}
  {
    console.log(profile);
  }
  return (
    <div>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <div className="username-profile">
            <h4>{profile.profileDetails.username}</h4>
          </div>
          <div className="first-last-name">
            <p>
              {profile.profileDetails.firstName}{" "}
              {profile.profileDetails.lastName}
            </p>
          </div>
          <p>{profile.profileDetails.description}</p>
          <img
            src={profile.profileDetails.image}
            alt="profile-picture"
            width="150px"
            className="image-profile"
          />
          <p>{profile.profileDetails.description}</p>
          <p>{profile.profileDetails.totalFollowers}</p>
          {profile.postOfTheUser.map((eachPost) => {
            return (
              <blockquote key={eachPost._id}>
                <p>{eachPost.content}</p>
                <p>{new Date(eachPost.time).toLocaleString()}</p>
                <p>{eachPost.totalLikes}❤️</p>
              </blockquote>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Profile;
