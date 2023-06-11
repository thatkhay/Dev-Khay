import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Aibrid from '../Img/aibrid.png';
import Githib from '../Img/githubfinder.png';
import Calc from '../Img/calc.png';
import Wize from '../Img/wize.png';
import Mysteryno from '../Img/mysterynumber.png';
import Loancalc from '../Img/loancalc.png';


function Projects() {
    const content = [
      {
        image: Aibrid,
        title: 'Airbrid.com',
        text: 'vuvhb'
      },
      {
        image: Githib,
        title: 'github',
        text: 'igvv'
      },
      {
        image: Calc,
        title: 'loan calc',
        text: 'hh'
      },
      {
        image: Wize,
        title: 'wize',
        text: 'b8b'
      },
      {
        image: Mysteryno,
        title: 'mystery',
        text: 'uhu'
      },
      {
        image: Loancalc,
        title: 'loancalc',
        text: 'huuu'
      }
    ];
  
    return (
      <div>
        <div className='projectMainContainer'>
          <h3 className='projectDivHeading'>My Projects</h3>
          <p className='projectDivP'>These are some of my recent projects</p>
        </div>
        <div className='projects'>
          {content.map((pics, index) => (
            <Card className='card' key={index}>
              <CardMedia className='projImg' component="img" src={pics.image} alt={pics.title} />
              <CardContent>
                <Typography variant="h5" component="div">
                  {pics.title}
                </Typography>
                <Typography variant="p" component="div">
                  {pics.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;