import React from 'react';
import { Button, useMediaQuery } from '@mui/material';
import Meimg from '../Img/me.png';
import '../App.css'
function Bio() {
  const isMobile = useMediaQuery('(max-width: 850px)');

  return (
    <div className='text'>
      <div className={isMobile ? 'bioDiv-mobile' : 'bioDiv'}>
        {isMobile && <img className="myImg-mobile" src={Meimg} alt="" />}
        <div className={isMobile ? 'nameBio-mobile' : 'nameBio'}>
          <h5 className={isMobile ? 'h5-mobile' : 'h5'}>Hi, I am</h5>
          <h1 className={isMobile ? 'name-mobile' : 'name'}>John-Kingsley</h1>
          <p className="occupation">Software Developer (Front End)</p>
          <div className="buttonDiv">
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/john-kingsley-egeonu-a6225b255/"
              style={{ margin: '10px', height: '3rem', width: '7rem' }}
              className="linkedin"
              variant="contained"
            >
              LinkedIn
            </Button>
            <Button
              target="_blank"
              href="https://github.com/thatkhay"
              style={{ margin: '10px', height: '3rem', width: '7rem' }}
              className="github"
              variant="contained"
            >
              GitHub
            </Button>
          </div>
        </div>
        {!isMobile && <img className="myImg" src={Meimg} alt="" />}
      </div>
    </div>
  );
}

export default Bio;


