import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Mylogo from '../Img/mylogo.png';

function Nav() {
  const isMobile = useMediaQuery('(max-width: 850px)');
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Mylogo} alt="" className="myLogo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              {open ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer}>
              <List>
                <ListItem button>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Experience" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Projects" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <ul className="nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Experience</li>
            <li className="nav-item">Projects</li>
          </ul>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
