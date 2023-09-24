import React, { useContext, useState } from 'react';
import { AppBar, Typography, Toolbar, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Mylogo from '../Img/mylogo.svg';
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
    <AppBar position="static" style={{backgroundColor: 'white', color: 'black', padding: '0 2rem'}}>
      <Toolbar style={{ display: 'flex', alignItems: 'center' , padding : '1nrem'}}>
        <img src={Mylogo} alt="" className="myLogo" style={{ height: '6rem', width: '8rem' }}/>
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
                  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '25rem' }}>

            <Switch  onChange={handleToggle} checked={checked} />
            </div>
                </ListItem>
              
              </List>
             
            </Drawer>
           
          </>
        ) : (
          <ul className="nav text"style={{width: '50%'}} >
             <Button variant="text" style={{color: 'black'}}>
              <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>
             </Button>
              <Button variant="text" style={{color: 'black'}}>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/aboutme' className="nav-item">About</Link>
              </Button>
              <Button variant="text" style={{color: 'black'}}>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/project' className="nav-item">Projects</Link >
              </Button>
              
            
            
            
            <Button variant="text" style={{color: 'black', height: '3rem', border: '.4px solid gray'}}>contact me</Button>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginRight: '-4rem' }}>

            <Switch  onChange={handleToggle} checked={checked} />
            </div>
          </ul>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
