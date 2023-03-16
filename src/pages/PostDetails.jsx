import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createAComment, getAllComments } from "../services/comments.services";
import { getDetailsFromAPost } from "../services/post.services";
import { getUserId } from "../services/auth.services";

import CommentsList from "./CommentsList";
import { AuthContext } from "../context/auth.context";

function PostDetails() {
  const params = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [content, setContent] = useState("");
  const [resfreshingForComments, setresfreshingForComments] = useState([]);
  const { id } = params;
  const { loggedUser } = useContext(AuthContext);
  console.log(id);

  useEffect(() => {
    getData();
    const intervalId = setInterval(() => {
      handleComments()
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, []);
  const getData = async () => {
    try {
      const response = await getDetailsFromAPost(id);
      console.log(response);
      setPostDetail(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleComments = async() => {
    try {
      const response = await getAllComments(id)
      console.log(response)
      setresfreshingForComments(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content,
      author: loggedUser,
    };
    console.log(newComment);
    try {
      const response = await createAComment(id, newComment);
      console.log(response);
       handleComments()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div className="title-post-details">
          <h2 >Thread</h2>
          <blockquote className="blockquote-post-details">
            <p className="post-details-username">
              @
              <span className="post-details-username">
                {postDetail.authorId.username}
              </span>
            </p>
            <div className="post-details-content" style={{wordWrap: "break-word"}}>
              <p>{postDetail.content}</p>
            </div>
            <p className="post-detail-date">
              {new Date(postDetail.time).toLocaleString()}
            </p>
            <p className="post-detail-likes">{postDetail.totalLikes}❤️</p>
            <hr />
            <CommentsList resfreshingForComments={resfreshingForComments}/>
            <form className="add-comments">
              <input
                type="text"
                name="comment"
                placeholder="Give your opinion!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="input-profile-details"
              />
              <button
                onClick={handleSubmit}
                className="profile-details-reply-button"
              >
                Reply
              </button>
            </form>
          </blockquote>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
