import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, useMediaQuery } from '@mui/material';

import Aibrid from '../Img/aibrid.png';
import Githib from '../Img/githubfinder.png';
import Calc from '../Img/calc.png';
import Wize from '../Img/wize.png';
import Mysteryno from '../Img/mysterynumber.png';
import Loancalc from '../Img/loancalc.png';
import '../App.css'

function Projects() {
  const isMobile = useMediaQuery('(max-width: 850px)');

  const content = [
    {
      image: Aibrid,
      title: 'Airbrid.com',
      text: `This is a simple cover page for an A-list DJ/Sound Engineer's ADs and Bookings in Nigeria`,
      link: 'https://aibridmusic.com/'
    },
    {
      image: Githib,
      title: 'GitHub Finder',
      text: 'GitHub Finder is an app that searches, filters GitHub users and displays their Public Repos, Followings, and Followers, among other info, using the GitHub API.',
      link: 'https://scout-github.netlify.app'
    },
    {
      image: Calc,
      title: 'Simple Calculator',
      text: 'This is a calculator that can perform basic arithmetic calculations.',
      link: 'https://smatcalculator.netlify.app'
    },
    {
      image: Wize,
      title: 'Wize Wizard',
      text: 'Wize Wizard is a program that provides random advice and inspiring phrases to help you start your day.',
      link: 'https://wize-wizard.netlify.app'
    },
    {
      image: Mysteryno,
      title: 'Mystery Number',
      text: 'This is a fun guessing game in which a number is chosen as a mystery number and the players are given three attempts to guess the correct number',
      link: 'https://mysteryno.netlify.app'
    },
    {
      image: Loancalc,
      title: 'Loan Calculator',
      text: 'This software was created to help a small loan firm compute customer loans. This returns the loan amount, total payment, and interest rate.',
      link: 'https://calculate-your-loans.netlify.app'
    }
  ];

  return (
    <div className='text'>
      <div className="projectMainContainer">
        <h2 className="projectDivHeading" >My Projects</h2>
        <p className="projectDivP">These are some of my recent projects</p>
      </div>
      <div className={isMobile ? 'projects-mobile' : 'projects' } >
        {content.map((pics, index) => (
          <Card className='card' key={index} sx={{ width: isMobile ? '100%' : '100%', marginBottom: '1rem' }}>
            <CardMedia className={isMobile ? 'projImg-mobile text' : 'projImg text'} component="img" src={pics.image} alt={pics.title} />
            <CardContent className="cardContent text">
              <Typography variant="h4" component="div">
                {pics.title}
              </Typography>
              <Typography variant="p" component="div" className='text'>
                {pics.text}
              </Typography>
              <div className="buttonContainer">
                <Button variant="contained" color="primary" href={pics.link} target="_blank" style={{backgroundColor: 'purple'}}>
                  View Project
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
