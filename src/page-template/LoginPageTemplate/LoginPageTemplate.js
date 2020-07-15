import React, { useState, useEffect, useContext } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./LoginPageTemplate.css";
//icons
import GitHubIcon from "@material-ui/icons/GitHub";

const LoginPageTemplate = () => {
    const loginLink =
        "https://github.com/login/oauth/authorize?client_id=aac6cc06d7890685988f&redirect_uri=http://localhost:3000/authredirect";

    return (
        <div className="LoginPageTemplate">
            <Container>
                <div className="login-box-wrapper">Log in</div>
                <div className="github-login-btn-box">
                    <a href={loginLink}>
                        <Button className="github-login-btn">
                            <GitHubIcon />
                            &nbsp;Continue with GitHub
                        </Button>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default LoginPageTemplate;
