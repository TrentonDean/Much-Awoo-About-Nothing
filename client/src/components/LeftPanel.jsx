import React from 'react'
const userPic = require("../assets/user_pfp.png")
const dogPic = require("../assets/dog_pfp.png")


const LeftPanel = (props) => {
  const {currentUser, setCurrentUser} =props;
    // theoretically, currentUser should give all the info it needs.

  return (
    <div id="leftPanelContainer">
        <div class="userInfoSide">
            <img class="userImage" alt="the current user's face" src={userPic}></img>
            <p class="userNameSide">{currentUser.name}</p>
            <p class="userBioSide">{currentUser.bio}</p>
        </div>
        <div class="dogInfoSide">
            <img class="dogImage" alt="the current user's dog" src={dogPic}></img>
            <p class='dogName'>{currentUser.dogs[0].name}</p>
            <p class='dogBio'>{currentUser.dogs[0].bio}</p>
        </div>
    </div>
  )
}

export default LeftPanel