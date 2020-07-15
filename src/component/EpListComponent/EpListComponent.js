import React, { useState, useEffect, useContext } from "react";
import db from "App";
import "./EpListComponent.css";
import { Button } from "reactstrap";

import * as firebase from "firebase/app";
import "firebase/firestore";
//const db = firebase.firestore();

import { StoreContext } from "context/Store";
import EpItem from "../../item/EpItem/EpItem";

const EpListComponent = () => {
    const { db, setDb } = useContext(StoreContext);
    const [list, setList] = useState([]);
    const getData = () => {
        if (db) {
            db.collection("apilist")
                .get()
                .then(function (querySnapshot) {
                    var tempList = [];
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        tempList.push(doc.data());
                    });
                    setList(tempList);
                    localStorage.setItem("api-list", JSON.stringify(tempList));
                });
        }
    };
    useEffect(() => {
        if (db) {
            var localData = JSON.parse(localStorage.getItem("api-list"));
            if (localData) {
                setList(localData);
                return;
            }
            getData();
        }
    }, [db]);

    const handleSync = () => {
        getData();
    };

    return (
        <div className="EpListComponent">
            <div className="header">
                <h1>API LIST</h1>
                <span className="newbtn">⛏ NEW EP</span>
            </div>
            <Button onClick={() => handleSync()}>🔄sync</Button>
            <EpItem
                method="POST"
                title="PostAllUser"
                author_name="favian"
                author_avatar="https://avatars2.githubusercontent.com/u/52910837?s=460&u=595b1991a7035f031a0130059c600983a5b438ae&v=4"
            />

            {list?.map((it) => (
                <EpItem key={it.title} {...it} />
            ))}
        </div>
    );
};

export default EpListComponent;
