import React from 'react'
import Nav from '../Nav'
import './ProfileScreen.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { signOut } from 'firebase/auth'

function ProfileScreen () {

  const user = useSelector(selectUser)

  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-screen__body">
        <h1>Edit Profile</h1>
        <div className="profile-screen__info">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
          <div className="profile-screen__details">
            <h2>{user.email}</h2>
            <div className="profile-screen__plans">
              <button onClick={() => signOut()} className="profile-screen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
