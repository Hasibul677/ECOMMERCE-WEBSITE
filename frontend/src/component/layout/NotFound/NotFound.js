import React from "react";
import "./NotFound.css";
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div className="notfoundParent">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <Link className="linkpage text-style" to="/home">HOME PAGE</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
