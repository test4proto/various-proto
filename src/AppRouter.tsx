import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import WindowResize from "./WindowResize";
import HeaderAndDrawer from "./HeaderAndDrawer";
import VirtualScrollGrid from "./VirtualScrollGrid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ContextTest from "./ContextTest";
import LoadingTest from "./LoadingTest";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        toolbar: theme.mixins.toolbar,
    })
);

const AppRouter: React.FC = () => {
    const classes = useStyles();

    return (
        <Router>
            <HeaderAndDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route exact path="/" />
                <Route path="/resize-test" component={WindowResize} />
                <Route
                    path="/virtual-grid-test"
                    component={VirtualScrollGrid}
                />
                <Route path="/context-test" component={ContextTest} />
                <Route path="/loading-test" component={LoadingTest} />
            </main>
        </Router>
    );
};

export default AppRouter;
