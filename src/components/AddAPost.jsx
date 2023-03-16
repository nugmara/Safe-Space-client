import { useState } from "react";
import { createAPost } from "../services/post.services";

function AddAPost(props) {
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      content,
      authorId,
    };
    try {
      await createAPost(newPost);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="content">
      <h3 className="edit-title">Post</h3>
        <hr />
        <form>
          <div class="field-content borders">
            <span></span>
            <input type="text" name="title" placeholder="Title" />
          </div>
          <hr />
          <div className="textarea borders">
            <span></span>
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
