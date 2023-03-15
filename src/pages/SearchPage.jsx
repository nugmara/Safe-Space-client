import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { searchUsersService } from "../services/search.services";

function SearchPage() {
  const [searchUsers, setSearchUsers] = useState("");
  const [findUsers, setfindUsers] = useState([]);
  const [users, setUsers] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  const findUser = (user) => {
    const foundUser = users.filter((eachUser) => {
      const usersToLowercase = eachUser.username.toLowerCase();
      const searchLowerCase = user.toLowerCase();
      if (usersToLowercase.includes(searchLowerCase)) {
        return true;
      } else {
        return false;
      }
    });
    setfindUsers(foundUser);
  };
  const handleSearchInput = (e) => {
    if (e.target.value !== "") {
      setSearchUsers(e.target.value);
      findUser(e.target.value);
    } else {
      setSearchUsers(e.target.value);
      setUsers([]);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await searchUsersService()
      setUsers(response.data);
      setisFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isFetching) {
    <h3>Loading...</h3>;
  }
  return (
    <div>
      <input
        type="text"
        placeholder="🔎  Search for users!"
        name="search"
        value={searchUsers}
        onChange={handleSearchInput}
        className="search-input"
      />
      <div>
        {findUsers.map((eachUser) => {
          return (
            <div>
              <Link
                to={`/userProfile/${eachUser._id}`}
                className="text-decoration"
              >
                <p key={eachUser._id} className="search-users">
                  {eachUser.username}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
