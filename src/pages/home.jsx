import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="header-title">Selamat Datang</h1>
        <p className="header-subtitle">di Website Kami</p>
      </header>
      <section className="content">
        <p className="content-text">ini adalah werbsite kami.</p>
      </section>
    </div>
  );
};

export default Home;
