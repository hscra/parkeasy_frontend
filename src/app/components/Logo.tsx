'use client';

import React from "react";
import Image from 'next/image';
import logo from '../public/logo.jpg';

const Header: React.FC = () => {
    return (
        <div id="logo" style={{ height: '100%', width: '20%', display: 'flex', justifyContent: 'flex-start', alignItems: 'left' }}>
            <div id="picture" style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={logo} alt="Logo" width={100} height={100} />
                <a style={{ marginLeft: '8px' }} href = "/app">ParkEasy</a>
            </div>
        </div>
    );
};

export default Header;
