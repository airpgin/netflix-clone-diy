import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen () {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="login-screen">
      <div className="login-screen__background">
        <img className="login-screen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <button onClick={() => setSignIn(true)} className="login-screen__button">Sign In</button>
        <div className="login-screen__gradient"></div>
      </div>
      <div className="login-screen__body">
        {
          signIn ?
            <SignupScreen /> :
            (
              <>
                <h1>Unlimited films, TV  programmes and more.</h1>
                <h2>Watch anything. Cannel at any time.</h2>
                <h3>Read to watch? Enter your email to create or restart your membership.</h3>
                <div className="login-screen__input">
                  <form>
                    <input type="email" placeholder="Email Address" name="" id="" />
                    <button onClick={() => setSignIn(true)} className="login-screen__getstarted">get started</button>
                  </form>
                </div>
              </>
            )

        }
      </div>
    </div>
  )
}

export default LoginScreen
