import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <input id="email" name="email" placeholder="Email"></input>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      ></input>
      <button type="submit"> Login</button>
    </div>
  );
};

export default Login;
