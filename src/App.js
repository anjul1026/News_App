import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route
            exact
            path="/home"
            element={
              <News
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={5}
                country="in"
                apiKey={apiKey}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={5}
                country="in"
                apiKey={apiKey}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={5}
                country="in"
                apiKey={apiKey}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={5}
                country="in"
                apiKey={apiKey}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={5}
                country="in"
                apiKey={apiKey}
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={5}
                country="in"
                apiKey={apiKey}
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={5}
                country="in"
                apiKey={apiKey}
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={5}
                country="in"
                apiKey={apiKey}
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
