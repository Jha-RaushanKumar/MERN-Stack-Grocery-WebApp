import React from "react";
import "./Footer.css"
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";

const Footer = () => {
    return (
        <footer id="foot">
            <div className="foot1">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div className="foot2">
                <h1>GO GROCERY</h1>
                <p>Fast Delivery is our first priority</p>

                <p>Copyrights 2022 &copy; GetGrocery</p>
            </div>

        </footer>
    );
};

export default Footer;
