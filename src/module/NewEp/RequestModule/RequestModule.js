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

const RequestBody = () => {
    const [bodytext, setBodyText] = useState("");

    const setValue = (text) => {
        setBodyText(text);
        return bodytext.value;
    };
    const str_repeat = (str, n) => {
        var out = "";
        while (n--) out += str;
        return out;
    };
    const isIndented = (line) => {
        var regex = new RegExp("^(" + "\t" + "+)", "g"),
            match = line.match(regex);
        return (match && match[0].length / "\t".length) || 0;
    };
    const addIndent = (before, after, num) => {
        if (!num) return;
        bodytext._lastValue = setValue(before + str_repeat("\t", num) + after);
        bodytext.selectionStart = bodytext.selectionEnd = before.length + "\t".length * num;
    };
    const removeIndent = (before, after) => {
        var remove = before.slice(before.length - 1 - "\t".length, before.length - 1);
        if (remove != "\t") {
            return;
        }

        bodytext._lastValue = setValue(before.slice(0, -1 - "\t".length) + "}" + after);
        bodytext.selectionStart = bodytext.selectionEnd = before.length - "\t".length;
    };
    const getPrevLine = (before) => {
        var lines = bodytext.value.split(/\n/g),
            line = before.trimRight().split(/\n/g).length - 1;
        return lines[line] || "";
    };

    const Test1 = (e) => {
        // var lastValue = bodytext?._lastValue,
        //     change = bodytext?.length - lastValue?.length;
        // if (!change) {
        //     return;
        // }
        // var caret = bodytext.selectionStart,
        //     added = (change > 0 && bodytext.substr(caret - change, change)) || "",
        //     removed = (change < 0 && lastValue.substr(caret, -change)) || "";
        // var code = e.keyCode;
        // var value = bodytext,
        //     before = value.substr(0, caret),
        //     after = value.substr(caret),
        //     lastChar = before.trim().slice(-1),
        //     nextChar = after.substr(0, 1);
        // // ENTER
        // if (code === 13) {
        //     // Immediately after a {
        //     if (lastChar === "{") {
        //         var prevLine = getPrevLine(before),
        //             indents = isIndented(prevLine),
        //             more = nextChar === "}" ? 0 : 1;
        //         return addIndent(before, after, indents + more);
        //     }
        //     // After an indented line
        //     var prevLine = getPrevLine(before),
        //         indents = isIndented(prevLine),
        //         more = nextChar === "}" ? -1 : 0;
        //     if (indents + more > 0) {
        //         addIndent(before, after, indents + more);
        //     }
        // } else if (added === "}") {
        //     removeIndent(before, after);
        // }
    };

    // const [startPos, setStartPos] = useState(0);
    // const [endPos, setEndPos] = useState(0);

    // const CursorLocation = (e) => {
    //     setStartPos(bodytext.slice(0, e.target.selectionStart).length);
    //     console.log(bodytext.slice(0, e.target.selectionStart).length);
    // };

    // const Test = (e) => {
    //     setStartPos(bodytext.slice(0, e.target.selectionStart).length);
    //     console.log(bodytext.slice(0, e.target.selectionStart + 1));
    //     e.preventDefault();
    //     if (e.keyCode === 9 || e.which === 9) {
    //         setBodyText(bodytext.substring(0, startPos) + "\t" + bodytext.substring(startPos));
    //     }
    // };

    return (
        <div className="RequestBody">
            <Input
                value={bodytext}
                type="textarea"
                name="req-body"
                id="req-body"
                onChange={({ target: { value } }) => {
                    setBodyText(value);
                }}
                placeholder="댓글을 입력하세요"
                // onKeyDown={Test}
                // onClick={Test}
                onKeyUp={Test1}
            />
            <Button onClick={() => console.log(JSON.parse(bodytext))}>JSON</Button>
        </div>
    );
};
const RequestModule = () => {
    const [tab, setTab] = useState("Headers");
    const TabRender = () => {
        switch (tab) {
            case "Headers":
                return <RequestHeader />;
            case "Body":
                return <RequestBody />;
            default:
                return "EndPoint";
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
