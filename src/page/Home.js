import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "context/Store";
import { Redirect } from 'react-router-dom'

//components
import EpListComponent from "component/EpListComponent/EpListComponent";
const Home = () => {
    const { user, setUser } = useContext(StoreContext);
    if (!user?.login) {
        return <Redirect to="/login" />
    }
    return (
        <div className="Home">
            <EpListComponent />
        </div>
    );
};

export default Home;
