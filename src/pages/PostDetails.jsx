import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createAComment } from "../services/comments.services";
import { deleteAPost, getDetailsFromAPost } from "../services/post.services";

function PostDetails() {
  const params = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [content, setContent] = useState("");
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
  const handleDelete = async () => {
    try {
      await deleteAPost(id);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content,
    };
    try {
      await createAComment(id, newComment);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <p>{postDetail.content}</p>
          <p>{postDetail.username}</p>
          <p>{postDetail.time}</p>
          <p>{postDetail.totalLikes}</p>
          <button onClick={handleDelete}>Remove</button>
          <hr />
          <form>
            <input
              type="text"
              name="comment"
              placeholder="Give your opinion!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSubmit}>Reply</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
