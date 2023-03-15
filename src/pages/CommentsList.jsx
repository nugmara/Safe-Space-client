import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllComments } from "../services/comments.services";

function CommentsList() {
  const [allComments, setAllComments] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const params = useParams()
  const {id} = params
  // console.log(allComments)

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await getAllComments(id);
      console.log(response)
      setAllComments(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isFetching) {
    return <h3>Loading...</h3>;
  }
 
  return (
    <div>
    <h3>Comments</h3>
      {allComments.map((eachComment) => {
        return(
          <div key={eachComment._id}>
            <p className="comments-username">@<span>{eachComment.author.username}</span> </p>
            <p>{eachComment.content}</p>
            <p className="comments-date">at {new Date(eachComment.time).toLocaleString()}</p>
          </div>
        )
      })}
    </div>
  );
}

export default CommentsList;
