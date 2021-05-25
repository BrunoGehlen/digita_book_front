import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { GiSunglasses, GiSettingsKnobs } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { GoCreditCard, GoCommentDiscussion } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { BiHelpCircle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { ImPencil } from "react-icons/im";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

function Menu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Digita Book
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <VscAccount style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"My Account"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GoCreditCard style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Get Premium"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <IoIosNotifications style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Notifications"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GiSettingsKnobs style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Settings"} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <GiSunglasses style={{ fontSize: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Keep Reading"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FaGlassCheers style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Book Clubs"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ImBooks style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Find Books"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GoCommentDiscussion style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Discussions"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ImPencil style={{ fontSize: "18px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Writer"} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <BiHelpCircle style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Help"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BiLogOut style={{ fontSize: "24px" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
    );
}

export default Menu