import React from "react";
import Logo from "./Logo";
import Registration from "./Registration";
import Links from "./Links";
import Rectangle from "./Rectangle";

const Header: React.FC = () => {
    return (
        <div id="header" className="h-[120px] w-[100%] absolute top-0 left-0 bg-blue-500 flex justify-center align-center">
            <Logo />
            <Links />
            <Registration />
        </div>
    );
};

export default Header;