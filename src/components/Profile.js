import React from "react";
import profilePic from "../img/avatar.jpg";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';

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
      <p style={{ fontSize: 11, color: 'gray' }}>Computer Engineer</p>
      <div
        className="socialMediaButtons"
        class="mt-2 d-flex flex-row align-items-center"
        style={{ color: 'gray' }}
      >
        <FacebookIcon onClick={e => window.location.href='https://www.facebook.com/danny.catacora'} />
        <TwitterIcon onClick={e => window.location.href='https://twitter.com/lucataco93'}/>
        <LinkedInIcon onClick={e => window.location.href='https://www.linkedin.com/in/lucataco'}/>
        <EmailIcon />
        <AssignmentIcon onClick={e => window.location.href='./resume.pdf'}/>
      </div>
    </div>
  );
};

export default Profile;
