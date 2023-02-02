import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const userPic = require("../assets/user_pfp.png")
const dogPic = require("../assets/dog_pfp.png")


const LeftPanel = (props) => {
  const {currentUser, setCurrentUser} =props;
  const [dummyUser, setDummyUser] =useState({
    name: "This could be you",
    bio: "Your story here",
    dogs:[{
      name: "The Cutest",
      bio: "Tell us your dog's story!"
    }]
  })


console.log("left panel",currentUser)
  return (
    
    <div id="leftPanelContainer">
      {currentUser!=null?
      <span>
        <img class="userImage" alt="the current user's face" src={userPic}></img>
        <p class="userNameSide">{currentUser.firstName} {currentUser.lastName}</p>
        <p class="userBioSide">{currentUser.bio}</p>
        <img class="dogImage" alt="the current user's dog" src={dogPic}></img>
        <p>{currentUser.dogs}</p>
        </span>:<span>
        <p>Your info here!</p>
        </span>}
    </div>
  )
}

export default LeftPanel