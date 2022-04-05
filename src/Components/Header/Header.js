import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="m p-3 header d-flex justify-content-between">
      <div className="header-name text-danger">
        <h3>Choose Bullet</h3>
      </div>
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/reviews">
          Reviews
        </Link>
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="link" to="/blogs">
          Blogs
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
