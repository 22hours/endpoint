import React, { useState, createContext } from "react";
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import AppRouter from "AppRouter";
import { useEffect } from "react";

import { StoreContext } from "context/Store";
import { useContext } from "react";

// export const UserContext = createContext();

import AppRouter from "AppRouter";

const firebaseConfig = {
    apiKey: "AIzaSyAGrEQbQekGKMGhorGbaT_R2VaAiSJHoLc",
    authDomain: "endpoint-4dcab.firebaseapp.com",
    databaseURL: "https://endpoint-4dcab.firebaseio.com",
    projectId: "endpoint-4dcab",
    storageBucket: "endpoint-4dcab.appspot.com",
    messagingSenderId: "211159245008",
    appId: "1:211159245008:web:b3580c14e872d2107b3ed5",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(); //store 사용
const App = () => {
    const handleClick = () => {
        db.collection("test")
            .get()
            .then(function (querySnapshot) {
                console.log(querySnapshot);
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
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
    const { user, setUser } = useContext(StoreContext);
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("user-data"));
        if (localData) {
            setUser({
                ...localData,
            });
        }
    }, [1]);
    return <AppRouter />;
};
export default App;
