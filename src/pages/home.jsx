import React from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate(); // Tambahkan useNavigate

  const handleLogout = () => {
    // Lakukan proses logout di sini (contoh: menghapus token, membersihkan sesi, dll)
    // Setelah logout, pindahkan pengguna ke halaman login
    localStorage.clear();
    navigate("/login");

    Swal.fire({
      position: "top-middle",
      icon: "success",
      title: "LOGOUT Berhasil!!",
      showConfirmButton: false,
      timer: 2500,
    });
  };
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="header-title">Selamat Datang</h1>
        <p className="header-subtitle">di Website Kami</p>
      </header>
      <section className="content">
        <p className="content-text">ini adalah website kami.</p>
      </section>
      <button onClick={handleLogout} className="logout">
        LOGOUT
      </button>
    </div>
  );
};

export default Home;
