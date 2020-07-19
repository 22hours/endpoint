import React, { useState, useEffect } from "react";
import NewEpEditor from "component/NewEpEditor/NewEpEditor";
import { NewEpStoreProvider } from "context/NewEpStore";
import { POST } from "rest";

const NewEp = () => {
    return (
        <div className="NewEp">
            <h1>NEW ENDPOINT ✏</h1>
            <NewEpStoreProvider>
                <NewEpEditor />
            </NewEpStoreProvider>
        </div>
    );
};

export default NewEp;
