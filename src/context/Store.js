import React, { useState } from "react";

const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
    const [db, setDb] = useState();
    const [number, setNumber] = useState(0);
    const [header, setHeader] = useState(true);
    const [user, setUser] = useState({
        id: null,
        accessToken: null,
    });
    const store = {
        db,
        setDb,
        user,
        setUser,
        number,
        setNumber,
    };

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreProvider, StoreContext };
