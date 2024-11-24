import React from "react";
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <div id="logo" className="h-[100%] w-[20%] flex justify-around items-center">
            <div id="picture">
                <Image src="/img/logo.jpeg" alt="Logo" width={100} height={100} />
            </div>
            <div id="app-name">ParkEasy</div>
        </div>
    );
};

export default Header;
