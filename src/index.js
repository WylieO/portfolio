import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Project,
  Projects,
  Resume,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Project />}>
        <Route path="" element={<Projects />} />
      </Route>
    </Routes>
    {/* <Footer /> */}
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
