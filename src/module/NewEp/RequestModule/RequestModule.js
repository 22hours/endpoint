import React, { useState, useEffect } from "react";
import { POST } from "rest";
import "./RequestModule.css";

const RequestModule = () => {
    const [tab, setTab] = useState("header");
    const TabRender = () => {
        switch (tab) {
            case "Headers":
                return "Headers";
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
