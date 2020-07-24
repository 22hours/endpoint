import React, { useState, useEffect, useContext } from "react";
import { POST } from "rest";
import "./RequestModule.css";
import { NewEpStoreContext } from "context/NewEpStore";
import RequestHeaderItem from "../RequestHeaderItem/RequestHeaderItem";
import { Input, Button } from "reactstrap";
const RequestHeader = () => {
    const { headers, setHeaders } = useContext(NewEpStoreContext);
    const [isOpen, setIsOpen] = useState(true);
    const [state, setState] = useState({
        _key: "",
        value: "",
        descript: "",
    });
    const addItem = () => {
        let list = JSON.parse(JSON.stringify(headers));
        // Deep Copy!
        list.push({ _key: "", value: "", descript: "" });
        setHeaders(list);
    };
    return (
        <div className="RequestHeader">
            <div className="add-item">
                <div className="item-input-header">KEY</div>
                <div className="item-input-header">VALUE</div>
                <div className="item-input-header">DESCRIPT</div>
            </div>
            {headers?.map((it, idx) => (
                <RequestHeaderItem key={idx} idx={idx} {...it} />
            ))}
            {/* {isOpen ? (
                <div className="add-item">
                    <input
                        onChange={(event) =>
                            setState({
                                ...state,
                                _key: event.target.value,
                            })
                        }
                        value={state._key}
                        className="item-input"
                        placeholder="Key"
                    ></input>
                    <input
                        onChange={(event) =>
                            setState({
                                ...state,
                                value: event.target.value,
                            })
                        }
                        value={state.value}
                        className="item-input"
                        placeholder="Value"
                    ></input>
                    <input
                        onChange={(event) =>
                            setState({
                                ...state,
                                descript: event.target.value,
                            })
                        }
                        value={state.descript}
                        className="item-input"
                        placeholder="Descript"
                    ></input>
                </div>
            ) : (
                ""
            )} */}
            <div className="add-div">
                <Button onClick={() => addItem()}> Add header item</Button>
            </div>
        </div>
    );
};

const RequestModule = () => {
    const [tab, setTab] = useState("Headers");
    const TabRender = () => {
        switch (tab) {
            case "Headers":
                return <RequestHeader />;
            case "body":
                return "body";
            default:
                return "hi";
        }
    };
    return (
        <div className="RequestModule">
            <nav className="tab-nav">
                <li onClick={() => setTab("Headers")} className={tab === "Headers" ? "on" : ""}>
                    Headers
                </li>
                <li onClick={() => setTab("Body")} className={tab === "Body" ? "on" : ""}>
                    Body
                </li>
            </nav>
            <TabRender />
        </div>
    );
};

export default RequestModule;
