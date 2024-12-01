import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <div id="header" className="h-[150px] w-full fixed top-0 left-0 bg-blue-500 flex justify-center items-center">
            <Logo />
            <Links />
        </div>
    );
};

export default Header;