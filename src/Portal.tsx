import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import classNames = require("classnames");
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    appBar: {},
    appBarShift: {},
    menuButton: {},
    hide: {},
});

const Portal: React.FC<PortalProps> = ({}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

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

    const sideList = () => {
        return (
            <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map(
                        (text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon="bars" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon="bars" />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    };

    return (
        <>
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
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
                {sideList()}
            </Drawer>
        </>
    );
};

export interface PortalProps {}

export default Portal;
