import React from 'react'
import Myimg from '../Img/bioimg.png'
import { Button } from '@mui/material';
function About() {
  return (
    <div>
          <div className='aboutDiv'>
        <img className='img' alt='' src={Myimg}></img>
        <div className='aboutText'>
        <h2>About Me</h2>
        <p className='aboutMeP'>I am a highly skilled and experienced frontend enginneer 
        with a passion for building intuitive, user-freindly websites and applications. 
        With a strong bacground in HTML, CSS, Javascript, Typscript and various front-end frame works (Tailwind, Next.js, React.js, Angular , MUI , Bootstrap etc...), 
        I have a proven track record of creating high-performing and visually appealing interface. 
        In addition to my technical abilities, I am a strong colabotrator and communicator, 
        able to work effectively with cross-functional teams to deliver succesful projects. 
        I am always keeping up with the latest industry trends and technologies to continuously improve my skills and deliver 
        cutting-edge solutions to my clients/ Employers</p>
        <Button style={{ margin: '10px', height: '3rem',  width: '7rem' }}  className='linkedin' variant="contained" >CV</Button>
        <Button style={{ margin: '10px', height: '3rem', width: '7rem' }} className='github' variant="contained" >E-mail</Button>
    </div>
 
    </div>
    </div>
  )
}

export default About