import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../components/App";
import AddProject from "../pages/AddProject";
import Error from "../pages/Error";
import Homepage from "../pages/Homepage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Homepage />} />
          <Route path="projects" element={<AddProject />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

// https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
