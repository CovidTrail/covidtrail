import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <input id="firstname" name="firstname" placeholder="First Name"></input>
      <input id="lastname" name="lastname" placeholder="Last Name"></input>
      <input id="email" name="email" placeholder="Email"></input>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Email"
      ></input>
      <button type="submit"> Signup</button>
    </div>
  );
};

export default Register;
