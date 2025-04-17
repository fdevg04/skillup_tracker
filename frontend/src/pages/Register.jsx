import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Required field";
    if (!email) newErrors.email = "Required field";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!password) newErrors.password = "Required field";
    if (!confirmPassword) newErrors.confirmPassword = "Required field";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("¡Registro exitoso!");
    }
  };

  return (
    <div className="register-page">
      <header className="app-header">SkillUp Tracker</header>
      <div className="register-container">
        <div className="register-box">
          <div className="register-left">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <div className="input-container">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="Paul Jones"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {errors.name && <p className="error-message">{errors.name}</p>}

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

              <label>Confirm Password</label>
              <div className="input-container">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="●●●●●●"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}

              <button type="submit">Register</button>
              <p className="register-text">
                Already have an account?{" "}
                <span onClick={() => navigate("/login")}>Log In</span>
              </p>
            </form>
          </div>

          <div className="register-right">
            <div className="register-right-image" />
            <div className="register-quote-box">
              <h3>Welcome to SkillUp Tracker</h3>
              <p>Start documenting your journey today.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
