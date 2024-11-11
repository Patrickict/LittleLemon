import React from 'react';
import Logo from '../images/logohor.png';

const Header = () => {
    return (
    <header className='App-header'>
        <img src={Logo} alt="Our Little Lemon Logo" id="logo" />
    </header>);
}

export default Header;