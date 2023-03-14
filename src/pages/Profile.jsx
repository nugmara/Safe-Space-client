import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileDetailsService } from "../services/profile.services";

function Profile() {
  const params = useParams();
  const { id } = params;
  const [profile, setProfile] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

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
  {console.log(profile)}
  return (
    <div>
      <h3>My profile</h3>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h4>{profile.profileDetails.username}</h4>
          <p>{profile.profileDetails.firstName}</p>
          <p>{profile.profileDetails.lastName}</p>
          <img
            src={profile.profileDetails.image}
            alt="profile-picture"
            width="150px"
          />
          <p>{profile.profileDetails.description}</p>
          <hr />
          {profile.postOfTheUser.map((eachPost) => {
            return (
          <div key={eachPost._id}>
            <p>{eachPost.content}</p>
            <p>{new Date(eachPost.time).toLocaleString()}</p>
            <p>{eachPost.totalLikes}❤️</p>
          </div>
            )
          })}
        </div>
      )}
    </div>
  );
}

export default Profile;
