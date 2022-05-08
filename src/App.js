import "./App.scss";

// Import-Router
import { Routes, Route } from "react-router-dom";

// Import-Pages
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Course/:id" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
