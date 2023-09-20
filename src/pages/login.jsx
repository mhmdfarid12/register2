import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css"; // Impor file CSS

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([
    {
      id: 0,
      username: "yourname",
      password: "k",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username !== "" && formData.password !== "") {
      const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

      const existingAccount = storedAccounts.find(
        (account) =>
          account.username === formData.username &&
          account.password === formData.password
      );

      if (existingAccount) {
        alert("Login berhasil!");
        console.log(storedAccounts);
        navigate("/Home");
      } else {
        alert("Username atau password salah!");
      }
    } else {
      alert("Harap isi semua kolom!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center">Login</h3>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit}
            >
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Login
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Belum Punya Akun?
                <Link to="/home" href="#" className="text-dark fw-bold">
                  <span>Klik Di Sini Untuk Register</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
