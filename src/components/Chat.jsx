import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getASpecifiChatService,
  getListOfAllChatServices,
  createAChatService,
} from "../services/chat.services";
import { getUserId } from "../services/auth.services";

function Chat() {
  const [chats, setChats] = useState([]);
  const [specificChat, setSpecificChat] = useState(null);
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await getListOfAllChatServices();
      console.log(response)
      setChats(response);
      setIsFetching(false)
    } catch (error) {
      console.log(error);
    }
  };
  const handleNavigateToChat = (chatId) => {
    setSpecificChat(chatId);
  };

  const handleSendAMessgae = async () => {
    const newChat = {
      chatId: specificChat.chatId,
      sender: specificChat.chatId,
      receiver: specificChat.chatId,
      message: message,
    };
    try {
      const response = await createAChatService(newChat);
      setSpecificChat(response.data);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  if (isFetching) {
    <h3>Loading...</h3>;
  }
  return (
    <div>
      <h2>Chat</h2>
      {/* <div>
        {chats.map((eachChat) => {
          return (
            <div onClick={handleNavigateToChat(eachChat._id)}>
              {eachChat.sender} - {eachChat.receiver}
            </div>
          );
        })}
      </div> */}
      {/* {specificChat && (
        <div>
          <h2>
            {specificChat.sender} - {specificChat.receiver}
          </h2>
          <div>
            {specificChat.messages.map((eachMessage, index) => {
              return (
                <div>
                  <p>{eachMessage.sender}: </p>
                  {eachMessage.message}
                </div>
              );
            })}
          </div> */}
          {/* <div>
            <input
              type="text"
              placeholder="Send a text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendAMessgae}>Send</button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Chat;
