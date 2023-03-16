import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { getUserId } from "../services/auth.services";
import {
  getAllPostsService,
  getDetailsFromAPost,
  likeAPost,
} from "../services/post.services";

function Home() {
  const [allPosts, setallPosts] = useState(null);
  const [liked, setLiked] = useState(false)
  const [isFetching, setIsFetching] = useState(true);
  const {loggedUser} = useContext(AuthContext)
  const {id} = useParams()

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

   const likeAPost = async () => {
     try {
       await likeAPost(id)
       setLiked(true)
     } catch (error) {
       console.log(error);
     }
   };
  if (isFetching) {
    return <h3>Loading...</h3>;
  }
  
  return (
    <div className="home-container">
      <h3>
        <img src="../../safe-space-logo-bigger-nobg.png" alt="logo" width="70px" className="logo-image-home" />
      </h3>
      {allPosts.map((eachPost) => {
        return (
          <div key={eachPost._id} className="home-page">
              <blockquote className="blockquote-home">
                <div className="home-page-date">
                <span>{new Date(eachPost.time).toLocaleString()}</span>
                </div>
                 <p className="post-username">@<span className="user-name-profile">{eachPost.authorId.username}</span></p> 
            <Link to={`/post/${eachPost._id}`} className="link-post">
                <p style={{wordWrap: "break-word"}}>{eachPost.content}</p>
                <br />
            </Link>
                <div className="like-post">
                 <p className="likes">
                  {eachPost.likes.length}
                  {liked ? null : (
                  <button
                    onClick={likeAPost}
                    className="heart-button"
                  >
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
