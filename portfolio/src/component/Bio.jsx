import React from 'react'
import { Button } from '@mui/material';
import Meimg from '../Img/me.png'

function Bio() {
  return (
    <div>
         <div className='bioDiv'>
       <div className='nameBio'>
        <h5>Hi, I am</h5>
        <h1 className='name'>John-Kingsley</h1>
        <p className='occupation'>Software Developer (Front End)</p>
        <div className='buttonDiv'>
        <Button style={{ margin: '10px', height: '3rem',  width: '7rem' }}  className='linkedin' variant="contained" >linkedin</Button>
        <Button style={{ margin: '10px', height: '3rem', width: '7rem' }} className='github' variant="contained" >github</Button>
        </div>
       </div>
       <img className='nyImg' src={Meimg} alt="" />
    </div>
    </div>
  )
}

export default Bio