import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {

  const user = useSelector(state => state.user)

  // quiero poner el nombre del usuario
  return (
    <div className="ui pointing menu">
      <div>{user.username}</div>
      <Link to ="/" className="item">Home</Link>
      <Link to ="/about" className="item">About</Link>
      <Link to ="/users" className="item">Users</Link>

      <div className="right menu">
        <div className="item">
          <div className="ui transparent icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NavBar;
