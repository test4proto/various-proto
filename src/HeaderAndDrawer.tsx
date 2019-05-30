import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import classNames = require("classnames");
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useReactRouter from "use-react-router";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        list: {
            width: 250,
        },
        fullList: {
            width: "auto",
        },
        appBar: {},
        menuButton: {},
        hide: {},
    })
);

const HeaderAndDrawer: React.FC<HeaderAndDrawerProps> = ({}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { history } = useReactRouter();

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    const toggleDrawer = (flg: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setOpen(flg);
    };

    const createList = (
        list: { title: string; icon: IconProp; next: string }[]
    ) => {
        return list.map(({ title, icon, next }, index) => (
            <ListItem
                button={true}
                key={title}
                onClick={() => history.push(next)}
            >
                <ListItemIcon>
                    <FontAwesomeIcon icon={icon} />
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItem>
        ));
    };

    const list: Array<{ title: string; icon: IconProp; next: string }> = [
        {
            title: "Portal",
            icon: "home",
            next: "/",
        },
        {
            title: "Resize Test",
            icon: "arrows-alt",
            next: "/resize-test",
        },
        {
            title: "Virtual Scroll Grid Test",
            icon: "table",
            next: "/virtual-grid-test",
        },
        {
            title: "Context Test",
            icon: "bell",
            next: "/context-test",
        },
    ];

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawer(true)}
                        edge="start"
                        className={classNames(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <FontAwesomeIcon icon="bars" />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>{createList(list)}</List>
                    <Divider />
                </div>
            </Drawer>
        </div>
    );
};

export interface HeaderAndDrawerProps {}

export default HeaderAndDrawer;
