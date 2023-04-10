import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllComments } from "../services/comments.services";

function CommentsList(props) {
  const [allComments, setAllComments] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const {resfreshingForComments} = props
  const params = useParams()
  const {id} = params
  const navigate = useNavigate()

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
      console.log(error)
    }
  };
  if (isFetching) {
    return <h3>Loading...</h3>;
  }
 
  return (
    <blockquote>
    {/* <h3>Comments</h3> */}
      {resfreshingForComments.map((eachComment) => {
        return(
          <div key={eachComment._id}>
  <div className="info-user-container">
    <img className="image-comments" src={eachComment.author.image} alt="" width="40px" style={{ float: 'left', marginRight: '10px' }} />
    <div style={{ overflow: 'hidden' }}>
      <p className="comments-username" >@<span>{eachComment.author.username}</span></p>
      <p style={{ wordWrap: "break-word"}} className="comments" >{eachComment.content}</p>
      <br />
    </div>
  </div>
  <p className="comments-date">at {new Date(eachComment.time).toLocaleString()}</p>
</div>

        )
      })}
    </blockquote>
  );
}

export default CommentsList;
