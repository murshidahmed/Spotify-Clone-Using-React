import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className='login'>
        <div className='logo'> 
            <img src="/images/spotifylogo.png"/>
        </div>
        <div className='button'>
          <a>LOGIN WITH SPOTIFY</a>
        </div>
    </div>
  )
}

export default Login