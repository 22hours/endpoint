import React, { useState } from "react";

const UserContext = React.createContext();

const defaultSettings = {
    theme: "light",
};

export const SettingsProvider = ({ children, settings }) => {
    const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings);

    const saveSettings = (values) => {
        setCurrentSettings(values);
    };

    return <UserContext.Provider value={{ settings: currentSettings, saveSettings }}>{children}</UserContext.Provider>;
};

export const UserConsumer = UserContext.Consumer;

export default UserContext;
