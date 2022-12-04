import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from '../../../images/GoGrocery.jpg';
import { FaUserAlt, FaCartPlus, FaSearch } from "react-icons/fa";
const Header = () => {
    return <ReactNavbar burgerColorHover="purple"
        burgerWidth="0.5vmax"
        logo={logo}
        logoWidth="20vmax"
        navColor1="grey"
        logoHoverSize="10px"
        logoHoverColor="#eb4034"
        link1Text="Home"
        link2Text="About"
        link3Text="Products"
        link4Text="Contact Us"
        link1Url="/"
        link2Url="/about"
        link3Url="/products"
        link4Url="/contact"

        link1Size="2.0vmax"
        link1Color="rgba(35, 35, 35,0.8)"
        nav1justifyContent="flex-end"
        nav2justifyContent="flex-end"
        nav3justifyContent="flex-end"
        nav4justifyContent="flex-end"
        link1ColorHover="#eb4034"
        link1Margin="1vmax"

        profileIconUrl="/login"
        profileIconColor="rgba(35, 35, 35,0.8)"
        searchIcon={true}
        SearchIconElement={FaSearch}
        searchIconColor="rgba(35, 35, 35,0.8)"
        cartIcon={true}
        CartIconElement={FaCartPlus}
        cartIconColor="rgba(35, 35, 35,0.8)"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        profileIconColorHover="purple"
        searchIconColorHover="purple"
        cartIconColorHover="purple"
        cartIconMargin="2vmax" />
};


export default Header;