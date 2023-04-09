import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { uploadImageService } from "../services/cloudinary.services";
import { updateProfileService } from "../services/profile.services";
import { searchUsersService } from "../services/search.services";

function SearchPage() {
  const [searchUsers, setSearchUsers] = useState("");
  const [findUsers, setfindUsers] = useState([]);
  const [users, setUsers] = useState(null);
  const [isFetching, setisFetching] = useState(true);
  const navigate = useNavigate()

  const findUser = async(user) => {
    try {
      const response = await searchUsersService(user)
      console.log(response)
      setfindUsers(response.data)
      
    } catch (error) {
      console.log(error)
    }
  };
  const handleSearchInput = (e) => {
    const input = e.target.value
    if (input !== "") {
      setSearchUsers(input);
      findUser(input);
    } else {
      setSearchUsers("");
      setUsers([]);
      setfindUsers([]);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await searchUsersService(`?search=${searchUsers}`)
      setUsers(response.data);
      setisFetching(false);
    } catch (error) {
      console.log(error)
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
            <div key={eachUser._id}>
              <Link
                to={`/userProfile/${eachUser._id}/follow`}
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
      <div className="wrapper-images">
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996515/safe-space-app/889f071a5ea4d14e457ccb4efb455c2c_hokvil.jpg" alt="pic" width="160px"  style={{margin: "0", marginTop: "20px"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996515/safe-space-app/1b1d984120100c9a54518e1322351deb_ycxd1f.jpg" alt="pic" width="160px" style={{margin: "0", marginTop: "20px"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678997110/safe-space-app/tumblr_nwmnewxATx1tpri36o1_400_fihkqd.gif" alt="pic" width="160px" style={{margin: "0", marginTop: "20px"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996515/safe-space-app/b4a06710721e97988734293b15d72119_clveij.jpg" alt="pic" width="160px" style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678997076/safe-space-app/tumblr_nfxklrmk9L1te5ruso1_400_bbej9m.gif" alt="160px" width="160px"  style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996516/safe-space-app/giphy_qnsug8.gif" alt="160px" width="160px"  style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996515/safe-space-app/FZUELuMakAE7-CY_wtbzlw.jpg" alt="160px" width="160px"  style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996516/safe-space-app/template-crying-cat-1573-0c6db91aec9c_sm4dcb.jpg" alt="160px" width="160px"  style={{margin: "0"}} />
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996515/safe-space-app/02e62d64-b302-472b-9b9a-b3fb6c3e441e-profile_image-300x300_uuid2d.png" alt="150" width="160px" style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996515/safe-space-app/a280f65b9b8191b6dfeb05063955c479_oxdtyj.jpg" alt="" width="160px" style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678997103/safe-space-app/puppy-comes-down-the-stairs_e3sgkn.gif" alt="" width="160px" style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678996515/safe-space-app/descarga_t05hid.jpg" alt="" width="160px" style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678997093/safe-space-app/cat-funny-animals_jfdkug.gif" alt="" width="160px" style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678997084/safe-space-app/funny-animals-dogs_asej5d.gif" alt="" width="160px" style={{margin: "0"}}/>
        <img src="https://res.cloudinary.com/dhtrxjdas/image/upload/v1678997332/safe-space-app/email_zjajfe.gif" alt="" width="160px" style={{margin: "0"}}/>
      </div>
    </div>
  );
}

export default SearchPage;
