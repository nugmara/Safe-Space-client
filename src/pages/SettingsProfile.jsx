import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileDetailsService, updateProfileService } from "../services/profile.services";

function SettingsProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const {id} = useParams()

  useEffect(() => {
    getData()
  })
  const getData = async() => {
    try {
      const response = await getProfileDetailsService(id)
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setDescription(response.data.description)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const updateProfile = {
        firstName,
        lastName,
        description
      }
      await updateProfileService(id, updateProfile)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

      <label>First Name: </label>
      <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

      <label>Last Name: </label>
      <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label>Description</label>
      <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} /> 

    <button type="submit">Edit</button>


      </form>
    </div>
  )
}

export default SettingsProfile