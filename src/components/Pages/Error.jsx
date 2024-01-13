import React from 'react'
import '../../styles/Error/error.css'
import {NavLink} from 'react-router-dom'
import HelmetHeader from "../Common/HelmetHeader";

const Error = () => {
  return (
    <>
    <HelmetHeader 
        title={'404 - Page Not Found | Prime Sender - Best Web Sender Extension'}
        description={'The page you are trying to vis'}
      />
      <div id='error' className='error'>
        <div className="error-img">
          <img src="/gifs/404Error.gif" alt="404 Page Not Found" />
        </div>
        <NavLink to='/' className="error-button button-round">
          Back To Home
        </NavLink>
      </div>
    </>
  )
}

export default Error
