import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Required field";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

    if (!password) newErrors.password = "Required field";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful");
    }
  };

  return (
    <div className="login-page">
      <header className="app-header">SkillUp Tracker</header>
      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <div className="input-container">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}

              <label>Password</label>
              <div className="input-container">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="●●●●●●"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}

              <button type="submit">Log In</button>
              <p className="register-text">
                Don't have an account?{" "}
                <span onClick={() => navigate("/register")}>
                  Register here
                </span>
              </p>
            </form>
          </div>

          <div className="login-right">
            <div className="login-right-image" />
            <div className="login-quote-box">
              <h3>Document your learnings</h3>
              <p>Unlock your potential with SkillUp Tracker.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
