import React from 'react'
import Mylogo from '../Img/mylogo.png'
function Nav() {
  return (
    <div>
         <nav className='navBar'>
          <img className='myLogo' src={ Mylogo } alt="" />
             {/* <h3>Dev-Khay</h3> */}
            <ul className='nav'>
                <li className='home'>HOME</li>
                <li>ABOUT</li>
                <li>EXPERIENCE</li>
                <li>PROJECTS</li> 
            </ul>
        </nav>
    </div>
  )
}

export default Nav