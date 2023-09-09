import React from 'react'
import '../../styles/Error/error.css'
import {NavLink} from 'react-router-dom'

const Error = () => {
  return (
    <div id='error' className='error'>
      <div className="error-img">
        <img src="/images/404Error.gif" alt="404 Page Not Found" />
      </div>
      <NavLink to='/' className="error-button button-round">
        Back To Home
      </NavLink>
    </div>
  )
}

export default Error
