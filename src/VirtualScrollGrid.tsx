import React, { useRef } from "react";
import useWindowResize from "./useWindowResize";
import {
    FixedSizeList as List,
    ListChildComponentProps,
    ListOnScrollProps,
} from "react-window";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

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

const DoubleGrid: React.FC<{ rows: any[] }> = ({ rows }) => {
    const { width, height } = useWindowResize(100);
    const left = useRef<List>(null);
    const right = useRef<List>(null);

    let scrolling = false;

    const handleRightScroll = (e: ListOnScrollProps) => {
        if (left.current && !scrolling) {
            console.log("right", e);
            scrolling = true;
            left.current.scrollTo(e.scrollOffset);
        } else {
            scrolling = false;
        }
    };
    const handleLeftScroll = (e: ListOnScrollProps) => {
        if (right.current && !scrolling) {
            console.log("left", e);
            scrolling = true;
            right.current.scrollTo(e.scrollOffset);
        } else {
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
    );
};

const VirtualScrollGrid: React.FC<VirtualScrollGridProps> = ({}) => {
    return (
        <>
            <DoubleGrid rows={[]} />
        </>
    );
};

export interface VirtualScrollGridProps {}

export default VirtualScrollGrid;
