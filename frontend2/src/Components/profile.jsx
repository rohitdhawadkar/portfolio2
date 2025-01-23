import React from "react";
import "./UserProfile.css";
import saitama from "/Users/rohit/web_dev/Portfolio/frontend2/public/IMG_6140 2.jpg";
import cover from "/1371030.jpg";
import githublogo from "/icons8-github.svg";
import twitterlogo from "/ww.svg";
import linkedinlogo from "/icons8-linkedin.svg";

function UserProfile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={cover} alt="cover" className="cover-image" />
          <div className="profile-overlay"></div>
        </div>

        <div className="profile-content">
          <div className="profile-info">
            <div className="profile-avatar-container">
              <img src={saitama} alt="avatar" className="profile-avatar" />
              <div className="online-status"></div>
            </div>

            <div className="profile-details">
              <h1 className="profile-name">Rohit Dhawadkar</h1>
              <p className="profile-email">rohit.dhawadkar@gmail.com</p>
              <p className="profile-role">UI/UX Designer & Developer</p>
            </div>

            <div className="social-buttons">
              <a
                href="https://github.com/rohitdhawadkar"
                className="social-button github"
              >
                <img src={githublogo} alt="github logo" />
                <i className="fa fa-github"></i>
                <span>Github</span>
              </a>
              <a
                href="https://x.com/rohitdhawadkar"
                className="social-button twitter"
              >
                <img src={twitterlogo} alt="github logo" />
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rohitdhawadkar/"
                className="social-button linkedin"
              >
                <img src={linkedinlogo} alt="linkedin logo" />
                <i className="fa-brands fa-medium"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="profile-bio">
            <h2>About Me</h2>
            <p>
              Passionate UI/UX designer focused on creating intuitive and
              engaging digital experiences. Driven by design thinking,
              creativity, and a love for problem-solving.
            </p>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
