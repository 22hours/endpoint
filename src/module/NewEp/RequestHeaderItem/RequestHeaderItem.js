import React, { useState, useEffect, useContext } from "react";
import { POST } from "rest";
import { NewEpStoreContext } from "context/NewEpStore";
import { Button } from "reactstrap";
import "./RequestHeaderItem.css";
const RequestHeaderItem = (props) => {
    const { saveHeaderItem, removeHeaderItem } = useContext(NewEpStoreContext);

    const InputChange = (type, value) => {
        console.log(type);
        console.log(value);
        switch (type) {
            case "_key":
                saveHeaderItem(props.idx, {
                    _key: value,
                });
                break;
            case "value":
                saveHeaderItem(props.idx, {
                    value: value,
                });
                break;
            case "descript":
                saveHeaderItem(props.idx, {
                    descript: value,
                });
                break;
            default:
                break;
        }
    };

    return (
        <>
            <tr className="RequestHeaderItem">
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
