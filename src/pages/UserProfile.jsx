import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileDetailsService } from "../services/profile.services";
import { followUser, unfollow } from "../services/following.services";

function UserPage() {
  const params = useParams();
  const { id } = params;
  const [profile, setProfile] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false)

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
{console.log(profile)}
  return (
    <div>
      <h3>User Profile</h3>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h4>{profile.profileDetails.username}</h4>
          <p>{profile.profileDetails.firstName}</p>
          <p>{profile.profileDetails.lastName}</p>
          <p>{profile.profileDetails.description}</p>
          <img
            src={profile.profileDetails.image}
            alt="profile-picture"
            width="150px"
          />
          <p>{profile.profileDetails.description}</p>
          <p>{profile.profileDetails.totalFollowers}</p>
          <button onClick={undefined}>{isFollowing ? "Unfollow" : "Follow"}</button>
          <hr />
          {profile.postOfTheUser.map((eachPost) => {
            return (
              <div key={eachPost._id}>
                <p>{eachPost.content}</p>
                <p>{new Date(eachPost.time).toLocaleString()}</p>
                <p>{eachPost.totalLikes}❤️</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UserPage;
