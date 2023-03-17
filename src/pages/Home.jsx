import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { getUserId } from "../services/auth.services";
import {
  deleteALikeService,
  getAllPostsService,
  getDetailsFromAPost,
  likeAPost,
} from "../services/post.services";

function Home() {
  const [allPosts, setallPosts] = useState(null);
  const [isLiked, setisLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const { loggedUser } = useContext(AuthContext);
  const params = useParams()
  const { id } = params


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getAllPostsService();
      console.log(response.data);
      setallPosts(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const likeAPost = async () => {
  //   try {
  //     await likeAPost(id);
  //     setisLiked(true);
  //     getData();
  //   } catch (error) {
  //     //  console.log(error);
  //   }
  // };
  // const deleteALike = async () => {
  //   try {
  //     await deleteALikeService(id);
  //     setisLiked(false);
  //     getData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  if (isFetching) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="home-container">
      <h3 className="logo-image-home">
        <img
          src="../../safe-space-just-logo-removebg-preview.png"
          alt="logo"
          width="90px"
          
        />
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
                  {isLiked ? (
                    <button className="heart-button" onClick={undefined}>
                      ❥
                    </button>
                  ) : (
                    <button className="heart-button" onClick={undefined}>
                      ❥
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
