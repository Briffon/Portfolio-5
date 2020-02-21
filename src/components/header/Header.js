import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#73b9ff"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#342E37"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Header(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const links = (text, index) => {
    let el = "";

    switch (index) {
      case 0:
        el = (
          <img
            className="icon"
            src={require("../../Icons/home.png")}
            alt="home icon"
          ></img>
        );
        break;
      case 1:
        el = (
          <img
            className="icon"
            src={require("../../Icons/pokeballs.png")}
            alt="home icon"
          ></img>
        );
        break;
      case 2:
        el = (
          <img
            className="icon"
            src={require("../../Icons/pikachu.png")}
            alt="home icon"
          ></img>
        );
        break;
      case 3:
        el = (
          <img
            className="icon"
            src={require("../../Icons/dex.png")}
            alt="home icon"
          ></img>
        );
        break;
      case 4:
        el = (
          <img
            className="icon"
            src={require("../../Icons/trainer.png")}
            alt="home icon"
          ></img>
        );
        break;
      default:
        break;
    }
    return el;
  };

  const drawer = (
    <div>
      <div className={`${classes.toolbar} toolbar`}>
        <img className="logo" alt="logo" src={require("../../art/Logo.png")} />
      </div>
      <Divider />
      <List>
        {["Home", "New", "Teams", "Resources", "About"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{links(text, index)}</ListItemIcon>
              <NavLink className="link" to={`/${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </NavLink>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div className={`${classes.root} drawer-root`}>
      <CssBaseline />
      <AppBar position="fixed" className={`${classes.appBar} appBar`}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Pokemon Advisor
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {" "}
        <div className={classes.toolbar} />
        {props.content}
      </main>
    </div>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any
};

export default Header;
