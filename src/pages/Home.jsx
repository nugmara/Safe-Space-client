import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddAPost from "../components/AddAPost";
import { getAllPostsService } from "../services/post.services";

function Home() {
  const [allPosts, setallPosts] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getAllPostsService()
      console.log(response.data)
      setallPosts(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  if(isFetching){
    return <h3>Loading...</h3>
  }
  return (

    <div>
    <AddAPost getData={getData}/>
    <h3>Logo</h3>
    {allPosts.map((eachPost) => {
      return(
        <p key={eachPost._id}>
          <Link to={`/post/${eachPost._id}`}>{eachPost.content} by {eachPost.authorId} at {eachPost.time}</Link>
        </p>
      )
    })}
    </div>
  )
}

export default Home;
