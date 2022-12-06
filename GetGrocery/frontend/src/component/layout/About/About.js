import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from '../../../images/GoGrocery.jpg';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
           <img
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="logo"
              alt =""
            />
            <Typography>Get Grocery</Typography>
            
            <span>
              This is a sample wesbite made by Team. Only with the
              purpose to teach MERN Stack.
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;