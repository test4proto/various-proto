import React, { useEffect, useState } from "react";
import useLoading from "./useLoading";
import { LoadingProvider } from "./LoadingContext";
import LoadingMessage from "./LoadingMessage";

const LoadingTest: React.FC<LoadingTestProps> = ({}) => {
    const { showLoading, hideLoading } = useLoading();
    const [state, setState] = useState(false);

    useEffect(() => {
        console.log("load start");
        showLoading();
        const to = setTimeout(hideLoading, 1000);

        return () => clearTimeout(to);
    }, [state]);

    return (
        <>
            <h4>Loading Test</h4>
            <button onClick={e => setState(!state)}>Load</button>
            <div>State => {String(state)}</div>
        </>
    );
};

export interface LoadingTestProps {}

// Providerを含むコンポーネントは再描画されるとステートが飛ぶので再描画されない場所に配置
const LoadingContainer: React.FC = () => {
    return (
        <LoadingProvider>
            <LoadingMessage />
            <LoadingTest />
        </LoadingProvider>
    );
};

export default LoadingContainer;
