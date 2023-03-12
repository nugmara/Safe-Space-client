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


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
