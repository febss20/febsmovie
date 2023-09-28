import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/alif.rasyid.98" target="_blank"> <FaFacebookF /> </a>
                    </span>
                    <span className="icon">
                        <a href="https://instagram.com/febss.rasy?igshid=OGQ5ZDc2ODK2ZA==" target="_blank"> <FaInstagram /> </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/feblooz20?t=VeTekFIXHJGrdN8qDAeUgA&s=08" target="_blank"> <FaTwitter /> </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/alif-rasyid-febriansyah-906743229" target="_blank"> <FaLinkedin /> </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
