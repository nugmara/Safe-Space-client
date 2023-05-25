import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import {
  deleteALikeService,
  getAllPostsService,
  likeAPost,
} from "../services/post.services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCrack,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { PacmanLoader } from "react-spinners";


function Home() {
  const [allPosts, setallPosts] = useState(null);
  const [isLiked, setIsLiked] = useState([]); // repasar esto
  const [isClicked, setIsClicked] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getAllPostsService();
      setallPosts(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (postId) => {
    try {
      await likeAPost(postId);
      setIsClicked(true)
      setallPosts((posts) =>
        posts.map((aPost) =>
          aPost._id ===  postId
            ? { ...aPost, likes: [...aPost.likes, loggedUser._id] }
            : aPost
        )
      );
      setIsLiked((prev) => [...prev, postId]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLike = async (postId) => {
    try {
      await deleteALikeService(postId);
      setIsClicked(true)
      setallPosts((posts) =>
        posts.map((aPost) =>
          aPost._id === postId
            ? {
                ...aPost,
                likes: aPost.likes.filter(
                  (userId) => userId !== loggedUser._id
                ),
              }
            : aPost
        )
      );
      setIsLiked((prev) => prev.filter((id) => id !== postId));
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching) {
    return <PacmanLoader color="#36d7b7" />
  }

  return (
    <div className="home-container">
      <div className="logo-image-home">
        <span>LOGO</span>
      </div>
      {allPosts.map((eachPost) => {
        return (
          <div key={eachPost._id} className="home-page">
            <blockquote className="blockquote-home">
              <div className="home-page-date">
                <span>{new Date(eachPost.time).toLocaleString()}</span>
              </div>
              <Link to={`/post/${eachPost._id}`} className="link-post">
                <p style={{ wordWrap: "break-word" }}>{eachPost.content}</p>
                <br />
              </Link>
              <div className="like-post">
                <p className="likes">
                  {eachPost.likes.length}
                  {eachPost.likes.includes(loggedUser._id) ? (
                    <button
                      className={isClicked ? "heart-button" : ""}
                      onClick={() => handleDeleteLike(eachPost._id)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  ) : (
                    <button
                      className={isClicked ? "heart-button" : ""}
                      onClick={() => handleLike(eachPost._id)}
                    >
                      <FontAwesomeIcon icon={faHeartCrack} />
                    </button>
                  )}
                </p>
              </div>
            </blockquote>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
