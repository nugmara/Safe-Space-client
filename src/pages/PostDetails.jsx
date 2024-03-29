import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createAComment, getAllComments } from "../services/comments.services";
import { getDetailsFromAPost } from "../services/post.services";
// import { getUserId } from "../services/auth.services";
import CommentsList from "./CommentsList";
import { AuthContext } from "../context/auth.context";
import { PacmanLoader } from "react-spinners";


function PostDetails() {
  const params = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [content, setContent] = useState("");
  const [resfreshingForComments, setresfreshingForComments] = useState([]);
  const { id } = params;
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate()

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
      setPostDetail(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error")
    }
  };
  const handleComments = async() => {
    try {
      const response = await getAllComments(id)
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
    try {
       await createAComment(id, newComment);
       handleComments()
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      {isFetching ? (
        <PacmanLoader color="#36d7b7" />
      ) : (
        <div className="title-post-details">
          <h2 className="title-post-details">Thread</h2>
          <blockquote className="blockquote-post-details">
          <Link to={`/userProfile/${postDetail.authorId._id}/follow`}>
            <p className="post-details-username">
              @
              <span className="post-details-username">
                {postDetail.authorId.username} 
              </span>
            </p>
          </Link>
            <div className="post-details-content" style={{wordWrap: "break-word"}}>
              <p>{postDetail.content}</p>
            </div>
            <p className="post-detail-date">
              {new Date(postDetail.time).toLocaleString()}
            </p>
            <hr />
            <p className="post-detail-likes">{postDetail.likes.length}<button className="heart-button">❥</button></p>
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
                <span className="fa fa-paper-plane"></span>
              </button>
            </form>
          </blockquote>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
