import { useState, useCallback, useEffect } from "react";
import throttle from "lodash/throttle";

const getWindowSize = () => {
    const element = document.documentElement;
    const body = document.getElementsByTagName("body")[0];
    const width = window.innerWidth || element.clientWidth || body.clientWidth;
    const height =
        window.innerHeight || element.clientHeight || body.clientHeight;

    return {
        width,
        height
    };
};

const useWindowResize = (throttleTime: number) => {
    const [size, setSize] = useState(getWindowSize());
    const handleResize = useCallback(
        throttle(() => setSize(getWindowSize()), throttleTime),
        [setSize]
    );

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    return { size };
};

export default useWindowResize;
