import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Login, Signup, CreatePost } from "../page";
import Navbar from "./Navbar";
import "../style/App.css";
import "../style/login.css";
import "../style/signup.css";
import "../style/navbar.css";
import "../style/home.css";
import "../style/comment.css";
import "../style/createPost.css";

import { useAuth } from "../context/authContext";

function App() {
  function PrivateRoute({ children }) {
    const { authentication } = useAuth();
    console.log("hello", authentication);
    if (authentication) {
      return children;
    }

    return <Navigate to="/login" />;
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/createpost"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
