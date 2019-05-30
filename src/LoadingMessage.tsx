import React from "react";
import useLoading from "./useLoading";

const LoadingMessage: React.FC<LoadingMessageProps> = ({}) => {
    const { loading } = useLoading();
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                opacity: 0.5,
                background: "#000",
                display: loading ? "flex" : "none",
                top: 0,
                left: 0,
                alignItems: "center",
                margin: "auto",
                justifyContent: "center",
            }}
        >
            <div style={{ color: "white", fontSize: 40 }}>Loading</div>
        </div>
    );
};

export interface LoadingMessageProps {}

export default LoadingMessage;
