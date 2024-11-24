import React from "react";
import LoginButton from "./LoginButton";

const Registration: React.FC = () => {
    return (
        <div id="registration" className="w-[20%] flex justify-center items-center flex-col">
            <LoginButton label = "Login" />
            <div>Login</div>
        </div>
    );
};

export default Registration;