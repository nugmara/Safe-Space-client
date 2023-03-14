import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getAllNotifications } from "../services/notifications.services";

function Notifications() {
  const [notification, setNotification] = useState([]);
  const params = useParams()
  const {id} = params
  console.log("hola que tal", id)

  useEffect(() => {
    getData()
  },[])
  const getData = async() => {
    const response = await getAllNotifications(id)
    console.log(response.data)
    setNotification(response.data)
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