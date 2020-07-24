import React, { useState, useEffect, useContext } from "react";
import { POST } from "rest";

const RequestHeaderItem = (props) => {
    const { key, value, descript } = props;
    const [state, setState] = useState({
        idx: "",
        _key: "",
        value: "",
        descript: "",
    });
    useEffect(() => {
        setState({
            ...props,
        });
    }, [props]);
    return (
        <div className="RequestHeaderItem">
            <div className="add-item">
                {state.idx}
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
        </div>
    );
};

export default RequestHeaderItem;
