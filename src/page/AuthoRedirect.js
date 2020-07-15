import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "context/Store";
import { GET } from "rest";
import axios from "axios";
import { Redirect } from "react-router-dom";
const AuthoRedirect = ({ history, location }) => {
    const [code, setCode] = useState();
    const { user, setUser } = useContext(StoreContext);
    const [finish, setFinish] = useState(false);
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
                    if (response.data?.accessToken) {
                        // access token 정상 반환 상태
                        setUser({
                            ...user,
                            accessToken: response.data?.accessToken,
                        });
                    } else {
                        // access token 반환 에러
                        setUser({
                            ...user,

                            accessToken: "error",
                        });
                    }
                });
        }
    }, [code]);

    const getUserData = async () => {
        const data = await GET("https://api.github.com/user", null, user?.accessToken);
        if (data) {
            console.log(data);
            if (data?.login) {
                console.log(data?.login);
                setUser({
                    ...user,
                    ...data,
                });
                localStorage.setItem(
                    "user-data",
                    JSON.stringify({
                        ...user,
                        ...data,
                    })
                );
                setFinish("success");
            } else {
                setFinish("fail");
            }
        }
    };
    useEffect(() => {
        if (user?.accessToken) {
            getUserData();
        }
    }, [user]);
    if (finish == "success") return <Redirect to={"/home"} />;
    else if (finish == "fail") return <Redirect to={"/login"} />;
    return <div className="AuthoRedirect">this is redirect!</div>;
};

export default AuthoRedirect;
