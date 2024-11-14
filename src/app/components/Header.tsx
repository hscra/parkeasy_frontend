import React from "react";
import Logo from "./Logo";
import Registration from "./Registration";
import Links from "./Links";

const Header: React.FC = () => {
    return (
        <div id="header" className="h-[120px] w-[100%] absolute top-0 left-0 bg-[#F0F0F0] flex justify-center align-center">
            <Logo />
            <Links />
            <Registration />
        </div>
    );
};

export default Header;