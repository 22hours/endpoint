import React, { useState, useEffect, useContext } from "react";
import { POST } from "rest";
import "./RequestModule.css";
import { NewEpStoreContext } from "context/NewEpStore";
import RequestHeaderItem from "../RequestHeaderItem/RequestHeaderItem";
import { Input, Button, Modal, Table, ModalHeader, ModalBody, ModalFooter, Alert } from "reactstrap";

const RequestHeaderEditModal = (props) => {
    const { isOpen, toggle, nowEdit } = props;
    const { addHeaderItem, editHeaderItem } = useContext(NewEpStoreContext);

    const [state, setState] = useState({
        _key: nowEdit._key,
        value: nowEdit.value,
        descript: nowEdit.descript,
    });
    useEffect(() => {
        setState({
            _key: nowEdit._key,
            value: nowEdit.value,
            descript: nowEdit.descript,
        });
    }, [props]);
    return (
        <Modal isOpen={isOpen} toggle={toggle} className="RequestHeaderEditModal">
            <ModalHeader>Header {nowEdit?.type === "edit" ? "수정 🚧" : "추가 ✒"}</ModalHeader>
            <ModalBody>
                <div>
                    <label>KEY</label>
                    <Input
                        placeholder="KEY값을 입력하세요"
                        value={state?._key}
                        onChange={(event) =>
                            setState({
                                ...state,
                                _key: event.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>VALUE</label>

                    <Input
                        placeholder="VALUE값을 입력하세요"
                        type="textarea"
                        value={state?.value}
                        onChange={(event) =>
                            setState({
                                ...state,
                                value: event.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label>DESCRIPT</label>
                    <Input
                        placeholder="DESCRIPT값을 입력하세요"
                        type="textarea"
                        value={state?.descript}
                        onChange={(event) =>
                            setState({
                                ...state,
                                descript: event.target.value,
                            })
                        }
                    />
                </div>
            </ModalBody>
            <ModalFooter>
                {state?._key.length < 2 || state?.value.length < 2 || state?.descript.length < 2 ? (
                    <Alert color="warning">입력을 먼저 완료하세요</Alert>
                ) : (
                    <Button
                        color="success"
                        onClick={() => {
                            if (state?._key.length < 2) return;
                            if (state?.value.length < 2) return;
                            if (state?.descript.length < 2) return;

                            if (nowEdit.type === "add") {
                                addHeaderItem(state);
                            } else {
                                editHeaderItem(nowEdit.idx, state);
                            }
                        }}
                    >
                        저장
                    </Button>
                )}
            </ModalFooter>
        </Modal>
    );
};

const RequestHeader = () => {
    const { headers, setHeaders } = useContext(NewEpStoreContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [nowEdit, setNowEdit] = useState({
        _key: "",
        value: "",
        descript: "",
    });

    const editItem = (idx) => {
        let nowItem = headers[idx];
        setNowEdit({
            _key: nowItem._key,
            value: nowItem.value,
            descript: nowItem.descript,
            idx: idx,
            type: "edit",
        });
        toggle();
    };
    const addItem = () => {
        setNowEdit({
            _key: "",
            value: "",
            descript: "",
            type: "add",
        });
        toggle();
    };

    const HandleEditItem = (idx) => {
        editItem(idx);
    };
    return (
        <>
            <table className="RequestHeader">
                <thead>
                    <tr>
                        <th className="key">KEY</th>
                        <th className="value">VALUE</th>
                        <th className="descript">DESCRIPT</th>
                        <th className="modify"></th>
                    </tr>
                </thead>
                <tbody>
                    {headers?.map((it, idx) => (
                        <RequestHeaderItem key={idx} idx={idx} {...it} HandleEditItem={HandleEditItem} />
                    ))}
                </tbody>
            </table>
            <div className="item-add-btn">
                <span style={{ cursor: "pointer" }} onClick={() => addItem()}>
                    ➕<br />
                    추가하기
                </span>
            </div>
            <RequestHeaderEditModal isOpen={isOpen} toggle={toggle} nowEdit={nowEdit} />
        </>
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
