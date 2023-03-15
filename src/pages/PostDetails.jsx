import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createAComment } from "../services/comments.services";
import { deleteAPost, getDetailsFromAPost } from "../services/post.services";
import { getUserId } from "../services/auth.services";

import CommentsList from "./CommentsList";

function PostDetails() {
  const params = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState("");
  const { id } = params;
  console.log(id)

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await getDetailsFromAPost(id);
      setPostDetail(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = await getUserId()
    const newComment = {
      content,
      author: userId  
    };
    console.log(newComment)
    try {
     const response = await createAComment(id, newComment);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <blockquote className="blockquote-post-details">
        
          <p className="post-details-username">@<span className="post-details-username">{postDetail.authorId.username}</span></p>
          <div className="post-details-content">
          <p>{postDetail.content}</p>
          </div>
          <p className="post-detail-date">{new Date(postDetail.time).toLocaleString()}</p>
          <p className="post-detail-likes">{postDetail.totalLikes}❤️</p>
          <hr />
          <CommentsList /> 
          <form className="add-comments">
            <input
              type="text"
              name="comment"
              placeholder="Give your opinion!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="input-profile-details"
            />
            <button onClick={handleSubmit} className="profile-details-reply-button">Reply</button>
          </form>
        </blockquote>
      )}
    </div>
  );
}

export default PostDetails;
