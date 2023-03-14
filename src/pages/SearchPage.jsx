import { useState } from "react";
import {
  searchUsers
} from "../services/search.services";

function SearchPage() {
  const [findUsers, setfindUsers] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearchInput = async () => {
    try {
      const response = await searchUsers(query);
      setfindUsers(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="don't be shy!"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearchInput}>Search</button>
      <ul>
        {findUsers.map((eachUser) => {
          return <li key={eachUser._id}>{eachUser.username}</li>;
        })}
      </ul>
    </div>
  );
}

export default SearchPage;
