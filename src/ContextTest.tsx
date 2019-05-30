import React, { useContext, useState } from "react";
import { TestProvider, TestContext } from "./TestContext";

const View: React.FC = () => {
    const { val } = useContext(TestContext);
    return (
        <div>
            <h4>View</h4>
            <div>{val}</div>
        </div>
    );
};

const Control: React.FC = () => {
    const { val, setVal } = useContext(TestContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(parseInt(e.currentTarget.value || "0"));
    };

    return (
        <div>
            <input type="number" value={val} onChange={handleChange} />
        </div>
    );
};

const ContextTest: React.FC = ({}) => {
    return (
        <>
            <TestProvider>
                <View />
                <Control />
            </TestProvider>
            <hr />
            <TestProvider>
                <View />
                <Control />
            </TestProvider>
        </>
    );
};

export default ContextTest;
