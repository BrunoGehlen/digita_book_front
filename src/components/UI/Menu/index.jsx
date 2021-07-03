import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {VscAccount} from "react-icons/vsc"
import {FaHandsHelping, FaGlasses, FaGlassCheers} from "react-icons/fa"
import {GoSettings} from "react-icons/go"
import {AiFillWechat} from "react-icons/ai"
import {RiLightbulbLine} from "react-icons/ri"
import {BiHelpCircle} from "react-icons/bi"
import {ImExit} from "react-icons/im"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:("#283F3B"),
    color: "#D8973C",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    backgroundColor:("#283F3B"),
    color: "#D8973C",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundColor:("#283F3B"),
    color: "#D8973C",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor:("#283F3B"),
    color: "#D8973C",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
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
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Digitabook
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={"Minha Conta"}>
              <ListItemIcon><VscAccount color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Minha Conta"} />
            </ListItem>
            <ListItem button key={"Nos Doe PLS"}>
              <ListItemIcon><FaHandsHelping color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Nos Doe PLS"} />
            </ListItem>
            <ListItem button key={"Configuracoes"}>
              <ListItemIcon><GoSettings color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Configuracoes"} />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key={"Continue Lendo"}>
              <ListItemIcon><FaGlasses color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Continue Lendo"} />
            </ListItem>
            <ListItem button key={"Grupos De Leitura"}>
              <ListItemIcon><FaGlassCheers color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Grupos De Leitura"} />
            </ListItem>
            <ListItem button key={"Discussoes"}>
              <ListItemIcon><AiFillWechat color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Discussoes"} />
            </ListItem>
            
        </List>
        <Divider />
        <List>
            <ListItem button key={"Sugestoes"}>
              <ListItemIcon><RiLightbulbLine color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Sugestoes"} />
            </ListItem>
            <ListItem button key={"Ajuda"}>
              <ListItemIcon><BiHelpCircle color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Ajuda"} />
            </ListItem>
            <ListItem button key={"Deslogar"}>
              <ListItemIcon><ImExit color="#D8973C" size="1.5rem" /></ListItemIcon>
              <ListItemText primary={"Deslogar"} />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>

        </Typography>
        <Typography paragraph>

        </Typography>
      </main>
    </div>
  );
}