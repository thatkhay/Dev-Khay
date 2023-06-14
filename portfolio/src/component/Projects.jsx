import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, useMediaQuery } from '@mui/material';

import Aibrid from '../Img/aibrid.png';
import Githib from '../Img/githubfinder.png';
import Calc from '../Img/calc.png';
import Wize from '../Img/wize.png';
import Mysteryno from '../Img/mysterynumber.png';
import Loancalc from '../Img/loancalc.png';

function Projects() {
  const isMobile = useMediaQuery('(max-width: 850px)');

  const content = [
    {
      image: Aibrid,
      title: 'Airbrid.com',
      text: `This is a simple cover page for an A-list DJ/Sound Engineer's ad and bookings in Nigeria`,
      link: 'https://example.com/airbrid'
    },
    {
      image: Githib,
      title: 'GitHub Finder',
      text: 'GitHub Finder is an app that searches and filters GitHub users and displays their Public Repos, Followings, and Followers, among other info, using the GitHub API.',
      link: 'https://example.com/airbrid'
    },
    {
      image: Calc,
      title: 'Simple Calculator',
      text: 'This is a calculator that can perform basic arithmetic calculations.',
      link: 'https://example.com/airbrid'
    },
    {
      image: Wize,
      title: 'Wize Wizard',
      text: 'Wize Wizard is a program that provides random advice and inspiring phrases to help you start your day.',
      link: 'https://example.com/airbrid'
    },
    {
      image: Mysteryno,
      title: 'Mystery Number',
      text: 'This is a fun guessing game in which a number is chosen as a mystery number and the players are given three attempts to guess the correct number',
      link: 'https://example.com/airbrid'
    },
    {
      image: Loancalc,
      title: 'Loan Calculator',
      text: 'This software was created to help a small loan firm compute customer loans. This returns the loan amount, length, and interest rate.',
      link: 'https://example.com/airbrid'
    }
  ];

  return (
    <div>
      <div className="projectMainContainer">
        <h3 className="projectDivHeading">My Projects</h3>
        <p className="projectDivP">These are some of my recent projects</p>
      </div>
      <div className={isMobile ? 'projects-mobile' : 'projects'}>
        {content.map((pics, index) => (
          <Card key={index} sx={{ bgcolor: 'rgb(230, 229, 229)', width: isMobile ? '80%' : '100%', marginBottom: '1rem' }}>
            <CardMedia className={isMobile ? 'projImg-mobile' : 'projImg'} component="img" src={pics.image} alt={pics.title} />
            <CardContent className="cardContent">
              <Typography variant="h4" component="div">
                {pics.title}
              </Typography>
              <Typography variant="p" component="div">
                {pics.text}
              </Typography>
              <div className="buttonContainer">
                <Button variant="contained" color="primary" href={pics.link} target="_blank">
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
