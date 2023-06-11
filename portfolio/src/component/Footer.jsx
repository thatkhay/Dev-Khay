import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div>
        <footer>
            <h6>Developed and designed by Dev-Khay</h6>
            <div className='footerIconDiv'>
            <GitHubIcon /> 
           <TwitterIcon /> 
           <LinkedInIcon /> 
            </div>
          
        </footer>
    </div>
  )
}

export default Footer