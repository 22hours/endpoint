import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "context/Store";

//components
import EpListComponent from "component/EpListComponent/EpListComponent";
const Home = () => {
    const { user, setUser } = useContext(StoreContext);
    return (
        <div className="Home">
            <EpListComponent />
        </div>
    );
};

export default Home;
