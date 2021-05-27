import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import "./ProfileScreen.css"

function ProfileScreen() {

    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://cdn3.vectorstock.com/i/1000x1000/38/17/male-face-avatar-logo-template-pictograph-vector-11333817.jpg" alt="" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <button 
                            onClick={() => auth.signOut()}
                            className="profileScreen_signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
