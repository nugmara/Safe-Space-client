import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Home from "./pages/Home"
import SearchPage from "./pages/SearchPage"
import Profile from "./pages/Profile"
import IsPrivate from "./components/IsPrivate";
import AddAPost from "./components/AddAPost";
import PostDetails from "./pages/PostDetails";
import UserProfile from "./pages/UserProfile"
import SettingsProfile from "./pages/SettingsProfile";
import HelpContactPage from "./pages/HelpContactPage";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        
        <Route path="/home" element={<IsPrivate> <Home /></IsPrivate>}/>
        <Route path="/search" element={<IsPrivate><SearchPage /></IsPrivate>}/>
        <Route path="/profile/:id" element={<IsPrivate><Profile /></IsPrivate>}/>
        <Route path="/userProfile/:id/follow" element={<IsPrivate><UserProfile /></IsPrivate>}/>
        <Route path="/post" element={<IsPrivate><AddAPost /></IsPrivate>}/>
        <Route path="/profile/:id/edit" element={<IsPrivate><SettingsProfile /></IsPrivate>}/>
        <Route path="/information/help" element={<HelpContactPage />}/>
       

        <Route path="/post/:id" element={<PostDetails />}/>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </div>
  );
}

export default App;
