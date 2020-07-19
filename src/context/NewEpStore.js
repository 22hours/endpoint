import React, { useState } from "react";

const NewEpStoreContext = React.createContext(null);

const NewEpStoreProvider = ({ children }) => {
    const [title, setTitle] = useState();
    const [method, setMethod] = useState("GET");
    const [name, setName] = useState();
    const [headers, setHeaders] = useState([]);
    const [body, setBody] = useState([]);

    const store = {
        name,
        setName,
        method,
        setMethod,
        headers,
        setHeaders,
        body,
        setBody,
    };

    return <NewEpStoreContext.Provider value={store}>{children}</NewEpStoreContext.Provider>;
};

export { NewEpStoreProvider, NewEpStoreContext };
