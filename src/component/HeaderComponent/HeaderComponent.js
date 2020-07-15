import React, { useState, useEffect, useContext } from "react";
import "./HeaderComponent.css";
import { StoreContext } from "context/Store";
const HeaderComponent = ({ location }) => {
    const { user, setUser } = useContext(StoreContext);
    return (
        <div className="HeaderComponent">
            <div className="header-wrapper">
                <div className="header-item menu-box">📁menu</div>
                <div className="header-item location-box">{location.pathname}</div>
                <div className="header-item user-box">
                    {/* <div>{user?.name}</div> */}
                    <div className="user-img">
                        <p>
                            <img src={user?.avatar_url} />
                        </p>
                    </div>
                    <div className="user-name">{user?.login}님🙋‍♂️</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
