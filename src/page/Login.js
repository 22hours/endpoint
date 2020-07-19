import React, { useState, useEffect, useContext } from "react";
import LoginPageTemplate from "page-template/LoginPageTemplate/LoginPageTemplate";
import { StoreContext } from "context/Store";
import { Redirect } from "react-router-dom";

const Login = () => {
    const { user, setUser } = useContext(StoreContext)
    if (user?.login) {
        return <Redirect to="/home" />
    }
    return (
        <div className="Login">
            <LoginPageTemplate />
        </div>
    );
};

export default Login;
