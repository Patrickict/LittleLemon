import React from 'react';
import Logo from  '../images/logoonly.png';

const Footer = () => {
    return (
        <>
        <div className="footerlogo">
            <img src={Logo} alt="Logo" id="logofooter"/>
        </div>

        <div className="copyright">
            Copyright © 2024
        </div>
        </>
    );

};

export default Footer;