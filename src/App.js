import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </div>
  );
}

export default App;
