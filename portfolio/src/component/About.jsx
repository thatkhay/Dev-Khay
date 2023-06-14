import React from 'react';
import { Button, useMediaQuery } from '@mui/material';
import Myimg from '../Img/bioimg.png';

function About() {
  const isMobile = useMediaQuery('(max-width: 850px)');

  return (
    <div>
      <div className={isMobile ? 'aboutDiv-mobile' : 'aboutDiv'}>
        <img className={isMobile ? 'img-mobile' : 'img'} alt='' src={Myimg} />
        <div className={isMobile ? 'aboutText-mobile' : 'aboutText'}>
          <h2>About Me</h2>
          <p className={isMobile ? 'aboutMeP-mobile' : 'aboutMeP' } style={{letterSpacing: '0.1rem'}}>
            I am a highly skilled and experienced frontend engineer with a passion for building intuitive, user-friendly
            websites and applications. With a strong background in HTML, CSS, JavaScript, TypeScript, and various
            front-end frameworks (Tailwind, Next.js, React.js, Angular, MUI, Bootstrap, etc.), I have a proven track
            record of creating high-performing and visually appealing interfaces. In addition to my technical abilities,
            I am a strong collaborator and communicator, able to work effectively with cross-functional teams to deliver
            successful projects. I am always keeping up with the latest industry trends and technologies to continuously
            improve my skills and deliver cutting-edge solutions to my clients/employers.
          </p>
          <Button style={{ margin: '10px', height: '3rem', width: '7rem' }} className='linkedin' variant="contained">
            CV
          </Button>
          <Button style={{ margin: '10px', height: '3rem', width: '7rem' }} className='github' variant="contained">
            E-mail
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;

