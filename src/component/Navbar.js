import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { authentication, logoutAuths, setAuthentication } = useAuth();
  const navigate = useNavigate();

  const logoutHandle = () => {
    logoutAuths();
    console.log(typeof authentication);
    // if (localStorage.getItem("isLoggedIn") === "false") {
    //   console.log("hello");
    //   return navigate("/login");
    // }

    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Blog</Link>
      </div>
      <div className="links">
        {!authentication && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        {authentication && <Link to="/createpost">Create Post</Link>}
        {authentication ? <button onClick={logoutHandle}>Logout</button> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
