import React from 'react';
import { Button, useMediaQuery } from '@mui/material';
import Meimg from '../Img/me.png';

function Bio() {
  const isMobile = useMediaQuery('(max-width: 850px)');

  return (
    <div>
      <div className={isMobile ? 'bioDiv-mobile' : 'bioDiv'}>
        {isMobile && <img className="myImg-mobile" src={Meimg} alt="" />}
        <div className={isMobile ? 'nameBio-mobile' : 'nameBio'}>
          {!isMobile && <img className="myImg" src={Meimg} alt="" />}
          <h5>Hi, I am</h5>
          <h1 className="name">John-Kingsley</h1>
          <p className="occupation">Software Developer (Front End)</p>
          <div className="buttonDiv">
            <Button style={{ margin: '10px', height: '3rem', width: '7rem' }} className="linkedin" variant="contained">
              linkedin
            </Button>
            <Button style={{ margin: '10px', height: '3rem', width: '7rem' }} className="github" variant="contained">
              github
            </Button>
          </div>
        </div>
        {!isMobile && <img className="myImg" src={Meimg} alt="" />}
      </div>
    </div>
  );
}

export default Bio;

