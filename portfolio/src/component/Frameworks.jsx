import React from 'react';
import Htmlimg from '../Img/html5.png';
import Cssimg from '../Img/css.png';
import Jsimg from '../Img/JavaScript.png';
import Reactimg from '../Img/react.png';
import Bootstrapimg from '../Img/Bootstrap.png';
import Typscriptimg from '../Img/typescript.png';
import Tailwindimg from '../Img/Tailwind.png';
import Angularimg from '../Img/angular.png';
import Muiimg from '../Img/MUIpng.png';
import '../App.css'

function Frameworks() {
  return (
    <div className='text'>
      <h2 className="langFrameTitle">Languages / Frameworks</h2>
      <div className="container">
        <img className="frameimg html" alt="" src={Htmlimg} />
        <img className="frameimg css" alt="" src={Cssimg} />
        <img className="frameimg js" alt="" src={Jsimg} />
        <img className="frameimg react" alt="" src={Reactimg} />
        <img className="frameimg bootstrap" alt="" src={Bootstrapimg} />
        <img className="frameimg" alt="" src={Typscriptimg} />
        <img className="frameimg" alt="" src={Angularimg} />
        <img className="frameimg" alt="" src={Tailwindimg} />
        <img className="frameimg" alt="" src={Muiimg} />
      </div>
    </div>
  );
}

export default Frameworks;
