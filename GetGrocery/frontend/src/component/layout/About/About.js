import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from '../../../images/GoGrocery.jpg';
import MetaData from "../../layout/MetaData";
const About = () => {

  return (

    <div className="about">
      <MetaData title="ABOUT US" />
      <div></div>
      <div className="about1">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <img className="photo" src={logo} alt="Logo" />
            <Typography component="h2">Go Grocery</Typography>

            <span>
              <p>
                Imagine needing something when you are at home and getting it before you have tied your shoelaces to step out. We are revolutionizing e-commerce by making the stuff most important to you, available to you in a blink of your eye.
              </p>
              <p>
                Our mission is “instant commerce indistinguishable from magic”. Using a backbone of technology, data sciences, and rich customer insights, we've built a dense and fast network of partner stores enabling lightning fast deliveries in minutes.
              </p>
              <p>We are one of the largest e-grocery companies in India. Our ambition however, is to be 100x this size in the next five years.
              </p>
              <p>
                In order to become one of the most important e-retail companies of our generation, we need builders who can think on their feet, take extreme ownership and commit to making outcomes happen. If you are ambitious, smart, and don’t have an ego about it, we’d love to hear from you.
              </p>
              <p>
                Opportunities to create $100 billion businesses in India are rare. We are on the way and looking for the hungry.
              </p>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;