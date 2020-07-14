import React, { useState } from "react";
import { Button } from "reactstrap";
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGrEQbQekGKMGhorGbaT_R2VaAiSJHoLc",
    authDomain: "endpoint-4dcab.firebaseapp.com",
    databaseURL: "https://endpoint-4dcab.firebaseio.com",
    projectId: "endpoint-4dcab",
    storageBucket: "endpoint-4dcab.appspot.com",
    messagingSenderId: "211159245008",
    appId: "1:211159245008:web:b3580c14e872d2107b3ed5",
};
// import firebase from "firebase";
// import "firebase/firestore";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); //store 사용
const App = () => {
    const [number, setNumber] = useState("0");
    const handleClick = () => {
        db.collection("test") //조회할 collection 넣어준다.
            .doc("test1") // 조회할 document 를 넣어준다.
            .get()
            .then((doc) => {
                console.log(doc.data());
            });
    };
    const handleClick2 = () => {
        db.collection("test")
            .doc("test1")
            .set({
                name: "Los Angeles",
                state: "CA",
                country: "USA",
            })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    };
    const handleChange = (e) => {
        setNumber(e.target.value);
    };
    return (
        <>
            <input value={number} onChange={handleChange}></input>
            <button onClick={handleClick}>입력</button>
            <button onClick={handleClick2}>입력</button>
        </>
    );
};
export default App;
