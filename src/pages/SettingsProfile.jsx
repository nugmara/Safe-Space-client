import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import {
  getProfileDetailsService,
  updateProfileService,
} from "../services/profile.services";

function SettingsProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await getProfileDetailsService(loggedUser);
      console.log(response);
      setFirstName(response.data.profileDetails.firstName);
      setLastName(response.data.profileDetails.lastName);
      setDescription(response.data.profileDetails.description);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateProfile = {
        firstName,
        lastName,
        description,
      };
      await updateProfileService(updateProfile);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-image">
      <div className="content">
        <h2>Edit your Profile</h2>
        <form onSubmit={handleSubmit} className="settings">
          <label className="label-stgs">First Name: </label>
          <div class="field-content">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <label className="label-stgs">Last Name: </label>
          <div class="field-content">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <label  className="label-stgs">Description: </label>
          <div class="field-content">
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-edit">Edit</button>
        </form>
      </div>
    </div>
  );
}

export default SettingsProfile;
