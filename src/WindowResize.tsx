import React from "react";
import useWindowResize from "./useWindowResize";

const App: React.FC<AppProps> = ({}) => {
    const size = useWindowResize(200);
    console.log("App", size);
    return (
        <>
            <div>
                {size.width} , {size.height}
            </div>
        </>
    );
};

export interface AppProps {}

export default App;
