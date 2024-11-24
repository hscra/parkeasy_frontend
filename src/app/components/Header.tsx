import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <div id="header" className="h-[120px] w-[100%] absolute top-0 left-0 bg-blue-500 flex justify-center align-center">
            <Logo />
            <Links />
        </div>
    );
};

export default Header;