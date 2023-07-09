import React, { useContext, useState } from 'react';
import { AppBar, Typography, Toolbar, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Mylogo from '../Img/mylogo.png';
import { Link } from "react-router-dom";
import '../App.css'
import Switch from 'react-switch'
import { ThemeProvider } from '../App';

function Nav() {

  const {theme, switchTheme} = useContext(ThemeProvider)
  const [checked, setChecked] = useState(theme === 'dark');
      
        const handleToggle = () => {
          setChecked((prevChecked) => !prevChecked);
          switchTheme();
        };
  
  const isMobile = useMediaQuery('(max-width: 850px)');
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static" className='text'>
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

                <ListItem button>
                  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '28rem' }}>
            <label className='text' htmlFor="switch" style={{ textTransform: 'capitalize', fontSize: '.7rem', fontWeight: '400'}}>{theme === 'light' ? 'light mode' : 'dark mode'}</label>
            <Switch  onChange={handleToggle} checked={checked} />
            </div>
                </ListItem>
              
              </List>
             
            </Drawer>
           
          </>
        ) : (
          <ul className="nav text"style={{width: '50%'}} >
            <Link style={{textDecoration: 'none', color: 'white'}} to='/' className="nav-item">Home</Link >
            <Link style={{textDecoration: 'none', color: 'white'}} to='/aboutme' className="nav-item">About</Link >
            <Link style={{textDecoration: 'none', color: 'white'}} to='/project' className="nav-item">Projects</Link >
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginRight: '-4rem' }}>
            <label className='text' htmlFor="switch" style={{ textTransform: 'capitalize', fontSize: '.7rem', fontWeight: '400'}}>{theme === 'light' ? 'light mode' : 'dark mode'}</label>
            <Switch  onChange={handleToggle} checked={checked} />
            </div>
          </ul>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
