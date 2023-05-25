import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllComments } from "../services/comments.services";
import { PacmanLoader } from "react-spinners";

function CommentsList(props) {
  // const [allComments, setAllComments] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const { resfreshingForComments } = props;
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate(); // navigación a los errores todavía esta sin implementar

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      await getAllComments(id);
      resfreshingForComments()
      // setAllComments(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isFetching) {
    <PacmanLoader color="#36d7b7" />;
  }

  return (
    <blockquote>
      {resfreshingForComments.map((eachComment) => {
        return (
          <div key={eachComment._id}>
            <div className="info-user-container">
              <img
                className="image-comments"
                src={eachComment.author.image}
                alt=""
                width="40px"
                style={{ float: "left", marginRight: "10px" }}
              />
              <div style={{ overflow: "hidden" }}>
                <p className="comments-username">
                  @<span>{eachComment.author.username}</span>
                </p>
                <p style={{ wordWrap: "break-word" }} className="comments">
                  {eachComment.content}
                </p>
                <br />
              </div>
            </div>
            <p className="comments-date">
              at {new Date(eachComment.time).toLocaleString()}
            </p>
          </div>
        );
      })}
    </blockquote>
  );
}

export default CommentsList;
