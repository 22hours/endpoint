import React, { useState, createContext } from "react";
import * as firebase from "firebase/app";
import "./App.css";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import AppRouter from "AppRouter";
import { useEffect } from "react";

import { StoreContext } from "context/Store";
import { useContext } from "react";

// export const UserContext = createContext();

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
const App = () => {
    const { user, setUser } = useContext(StoreContext);
    const { db, setDb } = useContext(StoreContext);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("user-data"));
        if (localData) {
            setUser({
                ...localData,
            });
        }

        setDb(firebase.firestore());
    }, [1]);
    return <AppRouter />;
};
export default App;
