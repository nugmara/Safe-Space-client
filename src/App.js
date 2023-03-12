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


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        
        <Route path="/home" element={<IsPrivate> <Home /></IsPrivate>}/>
        <Route path="/search" element={<IsPrivate><SearchPage /></IsPrivate>}/>
        <Route path="/notifications" element={<IsPrivate><Notifications /></IsPrivate>}/>
        <Route path="/profile" element={<IsPrivate><Profile /></IsPrivate>}/>
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </div>
  );
}

export default App;
