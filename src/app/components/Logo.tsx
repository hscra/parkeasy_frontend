import React from "react";

const Header: React.FC = () => {
    return (
        <div id="logo" className="h-[100%] w-[20%] flex justify-around items-center">
            <div id="picture"><a href="/">pic</a></div>
            <div id="app-name">ParkEasy</div>
        </div>
    );
};

export default Header;