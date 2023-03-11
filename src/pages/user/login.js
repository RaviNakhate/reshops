import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./user.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const body = { email, password };
    const response = await api.login(body);

    if (response.request.status != 200) {
      toast.error(response.response.data.err.message, "error");
    } else {
      localStorage.clear();
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("name", response.data.name);
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="user-div">
      <div className="wrapper">
        <h2>Login</h2>
        <div className="form">
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="input-box button">
            <input type="Submit" defaultValue="Login" onClick={() => login()} />
          </div>
          <div className="text">
            <h3>
              Create an account?{" "}
              <span
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register now
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
