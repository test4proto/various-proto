import React, { useRef, useState } from "react";
import useWindowResize from "./useWindowResize";
import { ReactTableDefaults } from "react-table";
import {
    FixedSizeList as List,
    ListChildComponentProps,
    ListOnScrollProps,
} from "react-window";
import classNames from "classnames";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    ListItemOdd: {
        background: "white",
    },
    ListItemEven: {
        background: "#ddd",
    },
    scrolling: {
        background: "red",
    },
});

const Row: React.FC<ListChildComponentProps> = ({
    index,
    style,
    data,
    isScrolling,
}) => {
    const classes = useStyles();
    // console.log(index, style, data, isScrolling);
    return (
        <div
            className={classNames(
                index % 2 && classes.ListItemOdd,
                !(index % 2) && classes.ListItemEven,
                isScrolling && classes.scrolling
            )}
            style={style}
        >
            Row {index}
        </div>
    );
};

const TbodyComponent: React.FC<{ rows: any[] }> = ({
    rows,
    children: makePageRow,
}) => {
    const { width, height } = useWindowResize(100);
    // const [scrolling, setScrolling] = useState(false);
    const left = useRef<List>(null);
    const right = useRef<List>(null);
    // const rowRenderer: React.FC<ListChildComponentProps> = ({
    //     data,
    //     index,
    //     style,
    //     isScrolling
    // }) => {
    //     const rowInfo = rows[index];

    //     if (makePageRow) {
    //         return (
    //             <div key={`row-${index}`} style={style}>
    //                 {makePageRow}
    //             </div>
    //         );
    //     } else {
    //         return <div />;
    //     }
    // };

    let scrolling = false;

    const handleRightScroll = (e: ListOnScrollProps) => {
        if (left.current && !scrolling) {
            console.log("right", e);
            //setScrolling(true);
            scrolling = true;
            left.current.scrollTo(e.scrollOffset);
            //setScrolling(false);
            scrolling = false;
        }
    };
    const handleLeftScroll = (e: ListOnScrollProps) => {
        if (right.current && !scrolling) {
            console.log("left", e);
            //setScrolling(true);
            scrolling = true;
            right.current.scrollTo(e.scrollOffset);
            //setScrolling(false);
            scrolling = false;
        }
    };

    return (
        <div>
            <List
                ref={left}
                className="List"
                height={height - 200}
                itemData={rows}
                itemCount={1000}
                itemSize={35}
                width={width / 2 - 50}
                useIsScrolling={true}
                onScroll={handleLeftScroll}
                style={{ float: "left" }}
            >
                {Row}
            </List>
            <List
                ref={right}
                className="List"
                height={height - 200}
                itemData={rows}
                itemCount={1000}
                itemSize={35}
                width={width / 2 - 50}
                useIsScrolling={true}
                onScroll={handleRightScroll}
            >
                {Row}
            </List>
        </div>
        // <ReactTableDefaults.TbodyComponent>
        // </ReactTableDefaults.TbodyComponent>
    );
};

const App: React.FC<AppProps> = ({}) => {
    const size = useWindowResize(200);
    console.log("App", size);
    return (
        <>
            <div>
                {size.width} , {size.height}
            </div>
            <TbodyComponent rows={[]} />
        </>
    );
};

export interface AppProps {}

export default App;
