import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAPost } from "../services/post.services";

function AddAPost(props) {
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState();
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      content,
      authorId,
    };
    try {
      await createAPost(newPost);
      navigate("/profile")
    } catch (error) {
     console.log("/error")
  };
  return (
    <div>
      <div className="content">
      <h3 className="edit-title">Post</h3>
      
        <form>
          <hr />
          <div className="textarea borders">
            <input
              type="textarea"
              name="content"
              placeholder="Put your thoughts on paper queen!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
          <button type="button" className="btn-post" onClick={handleSubmit}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAPost;
