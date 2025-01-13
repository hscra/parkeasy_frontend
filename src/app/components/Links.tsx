"use client";
import React from "react";
import LoginButton from "./LoginButton";
import { Button } from "@mui/joy";
import { useCache } from "../cache/CacheProvider";

const Links: React.FC = () => {
    const { loggedIn, setLoggedIn } = useCache();

    return (
        <div id="links" className="h-[100%] w-[60%] flex justify-end items-center [&>div>a]:mr-10 [&>div>a]:ml-10 [&>div]:flex">
            <div><a href="/orders">My Orders</a></div>
            <div><a href="/parking">Find Parking</a></div>
            <div><a href="/account">My Account</a></div>
            { process.env.ENV === "dev" ? <Button onClick={() => setLoggedIn(!loggedIn)}>Flip</Button> : ""}
            { loggedIn ?
                <LoginButton label="Logout" route="/signout"/> : (<>
                    <LoginButton label="Register" route="/signup"/>
                    <LoginButton label="Login" route="/signin"/>
                </>
            )}
        </div>
    );
};

export default Links;