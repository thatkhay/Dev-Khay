import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Mylogo from '../Img/mylogo.png';
import { Link } from "react-router-dom";

function Nav() {
  const isMobile = useMediaQuery('(max-width: 850px)');
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', alignItems: 'center' , padding : '1nrem'}}>
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
                <Link style={{textDecoration: 'none', color: 'black'}}  to='/'>
                  <ListItemText primary="Home" />
                  </Link>
                </ListItem>

                <ListItem button>
                <Link style={{textDecoration: 'none', color: 'black'}}  to='/aboutme'>
                  <ListItemText primary="About" />
                  </Link>
                </ListItem>

                <ListItem button>
                <Link style={{textDecoration: 'none', color: 'black'}}  to='/project'>
                  <ListItemText primary="Projects" />
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <ul className="nav"style={{width: '50%'}}>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/' className="nav-item">Home</Link >
            <Link style={{textDecoration: 'none', color: 'white'}} to='/aboutme' className="nav-item">About</Link >
            <Link style={{textDecoration: 'none', color: 'white'}} to='/project' className="nav-item">Projects</Link >
          </ul>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
