import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserId } from "../services/auth.services";
import {
  getAllPostsService,
  getDetailsFromAPost,
  likeAPost,
} from "../services/post.services";
import { createANotification } from "../services/notifications.services";

function Home() {
  const [allPosts, setallPosts] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isLikedNotification, setIsLikedNotification] = useState(false);

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

  const likingAPost = async (id) => {
    try {
      const userId = await getUserId();
      const singlePostDetails = await getDetailsFromAPost(id);
      const postCreator = singlePostDetails.data.authorId._id;
      console.log(postCreator);
      await likeAPost(id, userId);
      console.log(userId);
      console.log("creating a notifaction");
      const notificationCreation = await createANotification(
        id,
        userId,
        postCreator
      );
      console.log("notifications", notificationCreation);
      getData();
      setIsLikedNotification(true);
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
        <img src="../../mind-safe-space-logo.png" alt="" />
      </h3>
      {allPosts.map((eachPost) => {
        return (
          <div key={eachPost._id} className="home-page">
              <blockquote className="blockquote-home">
                <div className="home-page-date">
                <span>{new Date(eachPost.time).toLocaleString()}</span>
                </div>
                <p className="post-username">@<span>{eachPost.authorId.username}</span></p>
            <Link to={`/post/${eachPost._id}`} className="link-post">
                <p>{eachPost.content}</p>
                <br />
            </Link>
                <div  className="like-post">
                <p>
                  {eachPost.totalLikes}
                  <button
                    onClick={() => likingAPost(eachPost._id)}
                    className="heart-button"
                  >
                    ❤️
                  </button>
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
