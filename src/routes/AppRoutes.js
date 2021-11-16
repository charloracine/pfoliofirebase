import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../components/App";
import About from "../pages/About";
import AddProject from "../pages/AddProject";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Homepage from "../pages/Homepage";
import ProjectDetail from "../pages/ProjectDetail";
import Projects from "../pages/Projects";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Homepage />} />
          <Route path="add" element={<AddProject />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route exact path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

// https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
