import React from "react";
import Logo from "./Logo";
import Links from "./Links";

const Header: React.FC = () => {
    return (
        <div
            id="header"
            className="h-[150px] w-full fixed top-0 left-0 bg-blue-500 flex justify-center items-center z-50"
        >
            <Logo />
            <Links />
        </div>
    );
};

export default Header;