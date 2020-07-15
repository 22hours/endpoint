import React, { useState } from "react";

const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({
        id: null,
        accessToken: null,
    });
    const store = {
        user,
        setUser,
        number,
        setNumber,
    };

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreProvider, StoreContext };
