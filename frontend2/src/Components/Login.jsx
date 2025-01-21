import axios from "axios";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        formData,
        { withCredentials: true },
      );

      setMessage({
        type: "success",
        text: "Login successful! Redirecting...",
      });

      // Handle successful login (e.g., store token, redirect)
      setTimeout(() => {
        // Navigate to dashboard or home page
      }, 1500);
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error.response?.data?.message || "Login failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {message.text && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <div className="form-footer">
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/signup">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
