import React from "react";
import "./Contact.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import MetaData from "../../layout/MetaData";

const Contact = () => {
  return (
    <div className="contact">
      <MetaData title="CONTACT US" />
      <div></div>
      <div className="contact1">
        <Typography component="h1">Contact Us</Typography>

        <div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <div className="contact2">
            <a className="mailBtn" href="mailto:gogrocery@gmail.com">
              Contact: gogrocery@gmail.com
            </a>

          </div>

        </div>
      </div>
    </div>

  );
};

export default Contact;