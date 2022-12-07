import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from '../../../images/GoGrocery.jpg';
import { FaUserAlt, FaCartPlus, FaSearch } from "react-icons/fa";
const Header = () => {
    return <ReactNavbar burgerColorHover="rgba(171, 5, 46, 0.7)"
        burgerWidth="0.5vmax"
        logo={logo}
        logoWidth="12vmax"
        navColor1="rgba(255, 255, 255, 0.7)"
        logoHoverSize="5px"
        logoHoverColor="#eb4034"
        link1Text="Home"
        link2Text="About"
        link3Text="Products"
        link4Text="Contact Us"
        link1Url="/"
        link2Url="/about"
        link3Url="/products"
        link4Url="/contact"

        link1Size="1.8vmax"
        link1Color="rgba(171, 5, 46, 0.7)"
        nav1justifyContent="flex-end"
        nav2justifyContent="flex-end"
        nav3justifyContent="flex-end"
        nav4justifyContent="flex-end"
        link1ColorHover="rgba(171, 5, 46, 0.7)"
        link1Margin="1vmax"

        profileIconUrl="/login"
        profileIconColor="rgba(171, 5, 46, 0.7)"
        searchIcon={true}
        SearchIconElement={FaSearch}
        searchIconColor="rgba(171, 5, 46, 0.7)"
        cartIcon={true}
        CartIconElement={FaCartPlus}
        cartIconColor="rgba(171, 5, 46, 0.7)"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        profileIconColorHover="purple"
        searchIconColorHover="purple"
        cartIconColorHover="purple"
        cartIconMargin="3vmax" />
};


export default Header;