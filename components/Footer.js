import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-5" style={{ width: "100%" }}>
      <div className="container-fluid p-4 pb-0">
        <section className="mb-4">
          {/* Facebook */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/thefoodieslounge/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter/X */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://x.com/Foodie?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-twitter"></i> {/* Use fa-twitter instead of fa-Xtwitter */}
          </a>

          {/* Instagram */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/foodiesdotpk/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* LinkedIn */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://pk.linkedin.com/company/foodiesdotpk"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2025 Copyright:
        <a className="text-white ms-2" href="/">
          www.F🍽️♨️D🌶️'S.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
