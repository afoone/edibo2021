import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {setUsuario} from '../redux/actions'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const validUser = {
    username: "juan",
    password: "password",
    email: "pepe@mail.com",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === validUser.username && password === validUser.password) {
      dispatch(setUsuario(validUser));
    }
  };

  //{}
  return (
    <>
      {user.username && <Redirect to="/" />}
      <form className="ui form">
        <h1>Login</h1>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button className="ui button" onClick={login}>
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
