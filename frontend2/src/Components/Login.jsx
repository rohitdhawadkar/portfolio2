import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "hhtp:localhost:3000/",
        {
          Username,
          Password,
        },
        { withCredential: true },
      );

      console.log("Login Successful", response.data);
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid username or password");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="LoginContainer">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>login</h2>
          <div className="input">
            <label>Username</label>
            <input
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="input">
            <label>Password</label>
            <input
              value={Password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}{" "}
          {/* Show error message */}
          {successMessage && <p className="success">{successMessage}</p>}{" "}
          {/* Show success message */}
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
