import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Home from "./pages/Home"
import SearchPage from "./pages/SearchPage"
import Notifications from "./pages/Notifications"
import Profile from "./pages/Profile"
import IsPrivate from "./components/IsPrivate";
import AddAPost from "./components/AddAPost";
import PostDetails from "./pages/PostDetails";
import Chat from "./components/Chat"
import UserProfile from "./pages/UserProfile"
import { useState } from "react";
import AddChat from "./components/AddChat";
import SettingsProfile from "./pages/SettingsProfile";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        
        <Route path="/home" element={<IsPrivate> <Home /></IsPrivate>}/>
        <Route path="/search" element={<IsPrivate><SearchPage /></IsPrivate>}/>
        <Route path="/notifications" element={<IsPrivate><Notifications /></IsPrivate>}/>
        <Route path="/profile/:id" element={<IsPrivate><Profile /></IsPrivate>}/>
        <Route path="/userProfile/:id" element={<IsPrivate><UserProfile /></IsPrivate>}/>
        <Route path="/post" element={<IsPrivate><AddAPost /></IsPrivate>}/>
        <Route path="/chats" element={<Chat />} />
        <Route path="/profile/:id/edit" element={<IsPrivate><SettingsProfile /></IsPrivate>}/>
       

        <Route path="/post/:id" element={<PostDetails />}/>
        <Route path="/notifications/:id" element={<Notifications/>}/>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </div>
  );
}

export default App;
