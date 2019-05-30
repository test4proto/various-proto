import React, { createContext, useState } from "react";

export const LoadingContext = createContext({
    loading: false,
    showLoading() {
        console.log("default show");
    },
    hideLoading() {
        console.log("default hide");
    },
});

export const LoadingProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(false);
    console.log("init provider", loading);
    return (
        <LoadingContext.Provider
            value={{
                loading,
                showLoading: () => {
                    console.log("start");
                    setLoading(e => true);
                },
                hideLoading: () => setLoading(e => false),
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
};
