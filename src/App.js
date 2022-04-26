import "./App.scss";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
