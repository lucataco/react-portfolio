import React from "react";
import profilePic from "../img/avatar.jpg";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PaymentIcon from "@material-ui/icons/Payment";
import Pdf from "../docs/resume.pdf";
import "../App.css";

const Profile = () => {
  return (
    <div>
      <img
        src={profilePic}
        alt="profile pic"
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          margin: "auto",
          display: "block",
        }}
      />
      <h2>Luis D Catacora</h2>
      <p style={{ fontSize: 11, color: "gray" }}>Computer Engineer</p>
      <div
        className="socialMediaButtons mt-2 d-flex flex-row align-items-center"
        style={{ color: "gray" }}
      >
        <Tooltip title="facebook">
          <IconButton aria-label="facebook">
            <FacebookIcon
              onClick={(e) =>
                window.open("https://www.facebook.com/danny.catacora", "_blank")
              }
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="twitter">
          <IconButton aria-label="twitter">
            <TwitterIcon
              onClick={(e) =>
                window.open("https://twitter.com/lucataco93", "_blank")
              }
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="linkedIn">
          <IconButton aria-label="linkedIn">
            <LinkedInIcon
              onClick={(e) =>
                window.open("https://www.linkedin.com/in/lucataco", "_blank")
              }
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="paypal">
          <IconButton aria-label="paypal">
            <PaymentIcon
              onClick={(e) =>
                window.open("https://paypal.me/lucataco", "_blank")
              }
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="resume">
          <IconButton aria-label="resume">
            <AssignmentIcon onClick={(e) => window.open(Pdf)}></AssignmentIcon>
          </IconButton>
        </Tooltip>
        <Tooltip title="email">
          <IconButton aria-label="email">
            <EmailIcon href="mailto:lucataco@umd.edu" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Profile;
