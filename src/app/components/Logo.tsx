'use client';

import React from "react";
import Image from 'next/image';
import logo from '../public/logo.jpg';

const Header: React.FC = () => {
    return (
        <div id="logo" style={{ height: '100%', width: '20%', display: 'flex', justifyContent: 'flex-start', alignItems: 'left' }}>
            <div id="picture" style={{ display: 'flex', alignItems: 'center' }}>
                <a href = "/"><Image src={logo} alt="Logo" width={50} height={50} /></a>
                <a style={{ marginLeft: '8px' }} href = "/" >ParkEasy</a>
            </div>
        </div>
    );
};

export default Header;
