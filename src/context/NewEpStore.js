import React, { useState } from "react";

const NewEpStoreContext = React.createContext(null);

const NewEpStoreProvider = ({ children }) => {
    const [title, setTitle] = useState();
    const [method, setMethod] = useState("GET");
    const [name, setName] = useState();
    const [headers, setHeaders] = useState([{ _key: "12", value: "2", descript: "3" }]);
    const [body, setBody] = useState([]);
    const saveHeaderItem = (idx, item) => {
        let h_list = JSON.parse(JSON.stringify(headers));
        if (h_list[idx] !== headers[idx]) {
            h_list[idx] = { ...h_list[idx], ...item };
            setHeaders(h_list);
        }
    };
    const addHeaderItem = (item) => {
        setHeaders(headers.concat({ ...item }));
    };
    const editHeaderItem = (idx, item) => {
        let list = [...headers];
        list[idx] = { ...item };
        setHeaders(list);
    };
    const removeHeaderItem = async (idx) => {
        let forward = headers.slice(0, idx);
        let back = headers.slice(idx + 1, headers.length);
        let total = forward.concat(back);
        setHeaders(total);
    };
    const store = {
        name,
        setName,
        method,
        setMethod,
        headers,
        setHeaders,
        body,
        setBody,
        saveHeaderItem,
        addHeaderItem,
        editHeaderItem,
        removeHeaderItem,
    };

    return <NewEpStoreContext.Provider value={store}>{children}</NewEpStoreContext.Provider>;
};

export { NewEpStoreProvider, NewEpStoreContext };
