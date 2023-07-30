import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import AuthContext from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>
);
