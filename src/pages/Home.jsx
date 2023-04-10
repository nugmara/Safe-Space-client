import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { getUserId } from "../services/auth.services";
import {
  deleteALikeService,
  getAllPostsService,
  getDetailsFromAPost,
  likeAPost,
} from "../services/post.services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeartCrack,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [allPosts, setallPosts] = useState(null);
  const [isLiked, setIsLiked] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const { loggedUser } = useContext(AuthContext);
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    // getLikedPosts();
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

  // const getLikedPosts = async () => {
  //   try {
  //     const response = await likeAPost();
  //     setIsLiked(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleLike = async (postId) => {
    try {
      await likeAPost(postId);
      setIsClicked(true)
      setallPosts((posts) =>
        posts.map((aPost) =>
          aPost._id === postId
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
    return <h3>Loading...</h3>;
  }

  return (
    <div className="home-container">
      <h3 className="logo-image-home">
        <FontAwesomeIcon icon={faBars} style={{ color: "#090a0c" }} />
      </h3>
      {allPosts.map((eachPost) => {
        return (
          <div key={eachPost._id} className="home-page">
            <blockquote className="blockquote-home">
              <div className="home-page-date">
                <span>{new Date(eachPost.time).toLocaleString()}</span>
              </div>
              <p className="post-username">
                @
                <span className="user-name-profile">
                  {eachPost.authorId.username}
                </span>
              </p>
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
                      className="heart-button"
                      onClick={() => handleLike(eachPost._id)}
                    >
                      <FontAwesomeIcon icon={faHeartCrack} />
                    </button>
                  )}
                </p>
              </div>
            </blockquote>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
