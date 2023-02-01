import React from 'react'
import { useState } from 'react'
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
    // theoretically, currentUser should give all the info it needs.

    if (currentUser!==null){
      setDummyUser(currentUser)
    }
  console.log(dummyUser)
  return (
    <div id="leftPanelContainer">
        <div class="userInfoSide">
            <img class="userImage" alt="the current user's face" src={userPic}></img>
            <p class="userNameSide">{dummyUser.name}</p>
            <p class="userBioSide">{dummyUser.bio}</p>
        </div>
        <div class="dogInfoSide">
            <img class="dogImage" alt="the current user's dog" src={dogPic}></img>
            <p class='dogName'>{dummyUser.dogs[0].name}</p>
            <p class='dogBio'>{dummyUser.dogs.bio}</p>
        </div>
    </div>
  )
}

export default LeftPanel