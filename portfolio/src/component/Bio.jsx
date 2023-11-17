import React from 'react';
import { Button, useMediaQuery } from '@mui/material';
import Meimg from '../Img/me.png';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../App.css'
import { GitHub } from '@mui/icons-material';
function Bio() {
  const isMobile = useMediaQuery('(max-width: 850px)');

  return (
    <div className='text'>
      <div className={isMobile ? 'bioDiv-mobile' : 'bioDiv'}  >
        {isMobile && <img className="myImg-mobile" src={Meimg} alt="" />}
        <div className={isMobile ? 'nameBio-mobile' : 'nameBio'} style={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '12rem'}}>
          <h5 className={isMobile ? 'h5-mobile' : 'h5'}  style={{fontSize: '1.5rem'}}>Hi <WavingHandIcon fontSize='small'/>  </h5>
          <h1 className={isMobile ? 'name-mobile' : 'name'} style={{marginBottom: '2rem', fontSize: '2.4rem'}}>John-Kingsley</h1>
          <p className="occupation" style={{fontSize: '1.5rem'}}>__________ Software Developer (FrontEnd)</p>
          <div className="buttonDiv">
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/john-kingsley-egeonu-a6225b255/"
              style={{ margin: '10px', height: '3rem', width: '7rem' , backgroundColor: 'purple', border: '1px solid white'}}
              className="linkedin"
              variant="contained"
              
            >
              LinkedIn <LinkedInIcon fontSize='small'/>               
            </Button>
            <Button
              target="_blank"
              href="https://github.com/thatkhay"
              style={{ margin: '10px', height: '3rem', width: '7rem',  backgroundColor: "white", border: '1px solid purple',  color: 'black'}}
               className="github"
              variant="contained"
             
            >
              GitHub <GitHub fontSize='small'/> 
            </Button>
          </div>
        </div>
        {!isMobile && <img className="myImg" src={Meimg} alt="" />}
      </div>
    </div>
  );
}

export default Bio;


