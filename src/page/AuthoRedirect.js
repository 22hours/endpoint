import React, { useState, useEffect } from "react";
import axios from "axios";
const AuthoRedirect = ({ history, location }) => {
    const [code, setCode] = useState();
    useEffect(() => {
        console.log(history);
        console.log(location);
        if (location?.search) {
            setCode(location?.search?.split("=")[1]);
        }
    }, [history, location]);
    useEffect(() => {
        if (code) {
            axios
                .post("http://localhost:5000/endpoint/authenticate", {
                    code: code,
                })
                .then((response) => {
                    console.log(response);
                    if (response !== "error") {
                        // access token 정상 반환 상태
                    } else {
                        // access token 반환 에러
                    }
                });
        }
    }, [code]);
    return <div className="AuthoRedirect">this is redirect!</div>;
};

export default AuthoRedirect;
