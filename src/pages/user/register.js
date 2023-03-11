import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./user.css";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const body = { name, email, password };
    const response = await api.register(body);

    if (response.request.status != 200) {
      toast.error(response.response.data.err.message, "error");
    } else {
      localStorage.clear();
      toast.success(response.data.message, "success");
      navigate("/login");
    }
  };

  return (
    <div className="user-div">
      <div className="wrapper">
        <h2>Registration</h2>
        <div className="form">
          <div className="input-box">
            <input
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <input
              type="name"
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
            <input
              type="Submit"
              defaultValue="Register"
              onClick={() => register()}
            />
          </div>
          <div className="text">
            <h3>
              Already have an account?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login now
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
