import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getFriendsChatService,
} from "../services/chat.services";
import { getUserId } from "../services/auth.services";
import AddChat from "./AddChat";

function Chat() {
  const [friendsChat, setfriendsChat] = useState([]);
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const response = await getFriendsChatService()
      console.log(response)
      setfriendsChat(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleNavigateToChat = (friendId) => {
    navigate(`/chats/${friendId}`)
  }
  return (
    <div>
      <h2>Chats</h2>
      <ul>
        {friendsChat.map((eachFriend) => {
          return(
            <li key={eachFriend._id}>
            <button onClick={() => handleNavigateToChat(eachFriend._id)}>{eachFriend._id}</button>
            </li>
          )
        })}
      </ul>
      {id && <AddChat receiver={id} />}
     
    </div>
  );
}

export default Chat;
