import React, { createContext, useState } from "react";

export const TestContext = createContext({ val: 0, setVal: (n: number) => {} });

export const TestProvider: React.FC = ({ children }) => {
    const [val, setVal] = useState(0);
    return (
        <TestContext.Provider value={{ val, setVal }}>
            {children}
        </TestContext.Provider>
    );
};
