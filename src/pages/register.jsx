import React, { useState } from "react";
import "../css/register.css"; // Impor file CSS
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const accounts = [
    {
      id: 0,
      email: "youremail@gmail.com",
      username: "yourname",
      password: "yourpassword",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      const newAccount = {
        id: accounts.length,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      };

      // Menambahkan akun baru ke array accounts
      accounts.push(newAccount);

      // Menyimpan array accounts di localStorage
      localStorage.setItem("accounts", JSON.stringify(accounts));

      alert("Registrasi berhasil!");
      console.log(accounts);

      navigate("/login");

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } else {
      alert("Harap isi semua kolom!");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center">Register</h3>
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
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="User Name"
                  name="username"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  placeholder="email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  placeholder="password"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Register
                </button>
              </div>
            </form>
            <div className="text-center mb-5 text-dark">
              Sudah Punya Akun?
              <Link to="/login" className="text-dark fw-bold">
                <span>klik di sini untuk login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
