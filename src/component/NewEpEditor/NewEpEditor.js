import React, { useState, useEffect, useContext } from "react";
import { Input } from "reactstrap";
import "./NewEpEditor.css";

import { NewEpStoreContext } from "context/NewEpStore";

//modules
import RequestModule from "module/NewEp/RequestModule/RequestModule";

const MethodItem = ({ _method }) => {
    const { method, setMethod } = useContext(NewEpStoreContext);
    return (
        <div className="MethodItem" onClick={() => setMethod(_method)}>
            <span className={_method === method ? "click " + method : ""}>{_method}</span>
        </div>
    );
};
const NewEpEditor = () => {
    const { name, setName } = useContext(NewEpStoreContext);
    const methods = ["GET", "POST", "PUT", "OPTION"];

    return (
        <div className="NewEpEditor">
            <div className="flex-row">
                {methods?.map((it) => (
                    <MethodItem key={it} _method={it} />
                ))}
            </div>
            <div className="flex-row">
                <input
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    type="text"
                    id="api-name"
                    placeholder="API 이름을 써주세요 *필수"
                ></input>
            </div>
            <div className="request-box">
                <RequestModule />
            </div>
        </div>
    );
};

export default NewEpEditor;
