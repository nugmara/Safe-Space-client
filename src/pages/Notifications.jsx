import { useContext, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { getAllNotifications } from "../services/notifications.services";
import { getDetailsFromAPost } from "../services/post.services";
import { getUserId } from "../services/auth.services";

function Notifications() {
  const [notification, setNotification] = useState([]);
  const params = useParams()
  const {id} = params
  console.log(id)
  const userId = getUserId()

  console.log("hola que tal", id)

  useEffect(() => {
    getData()
  },[])
  const getData = async() => {
    const response = await getAllNotifications(id)
    console.log(response.data)
    const filterTheNotifications = response.data.filter((notification) => notification.userId === userId)
    setNotification(filterTheNotifications)
    console.log("que pasa",filterTheNotifications)
  }


  return (
    <div>
      <h3>Notifications</h3>
      {notification.map((eachNotification) => {
        return(
          <div key={eachNotification._id}>
            <h4>{eachNotification.title}</h4>
            <p>{eachNotification.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Notifications