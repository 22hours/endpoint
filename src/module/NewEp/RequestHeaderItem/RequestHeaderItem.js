import React, { useState, useEffect, useContext } from "react";
import { POST } from "rest";
import { NewEpStoreContext } from "context/NewEpStore";
import { Button } from "reactstrap";
import "./RequestHeaderItem.css";
const RequestHeaderItem = (props) => {
    const { saveHeaderItem, removeHeaderItem } = useContext(NewEpStoreContext);
    return (
        <>
            <tr className="RequestHeaderItem" onClick={() => props.HandleEditItem(props.idx)}>
                <td className="key">{props._key}</td>
                <td className="value">{props.value}</td>
                <td className="descript">{props.descript}</td>
                <td className="modify-td">
                    <span
                        onClick={() => {
                            props.HandleEditItem(props.idx);
                        }}
                    >
                        Edit
                    </span>
                    <span
                        onClick={() => {
                            removeHeaderItem(props.idx);
                        }}
                    >
                        Remove
                    </span>
                </td>
            </tr>
        </>
    );
};

export default RequestHeaderItem;
