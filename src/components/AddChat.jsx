import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createAConversationService,
  getAllChatService,
} from "../services/chat.services";
import { getUserId } from "../services/auth.services";

function AddChat({receiver}) {
  const [message, setMessage] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const {id} = useParams()
console.log(id)
  const handlechange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const userId = getUserId()
    try {
      const response = await createAConversationService(id, {
        sender: userId,
        receiver,
        message
      })
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
    <div>

    </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="chat"
          placeholder="Send a text"
          value={message}
          onChange={handlechange}
        />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default AddChat;
