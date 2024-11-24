import React from "react";
import LoginButton from "./LoginButton";

const Links: React.FC = () => {
    return (
        <div id="links" className="h-[100%] w-[60%] flex justify-end items-center [&>div>a]:mr-10 [&>div>a]:ml-10 [&>div]:flex">
            <div><a href="/parking">Find Parking</a></div>
            <div><a href="/orders">My Orders</a></div>
            <div><a href="/account">My Account</a></div>
            <div><LoginButton label = "Register" /></div>
        </div>
    );
};

export default Links;