import React from 'react'
const userPic = require("../assets/user_pfp.png")
const dogPic = require("../assets/dog_pfp.png")


const LeftPanel = () => {
    // need to fetch user/dog info here

  return (
    <div id="leftPanelContainer">
        <div class="userInfoSide">
            <img class="userImage" alt="the current user's face" src={userPic}></img>
            <p class="userNameSide">Writer McWriterson</p>
            <p class="userBioSide">Writer bio goes here.</p>
        </div>
        <div class="dogInfoSide">
            <img class="dogImage" alt="the current user's dog" src={dogPic}></img>
            <p class='dogName'>Dog McWriterson</p>
            <p class='dogBio'>Dog bio goes here.</p>
        </div>
    </div>
  )
}

export default LeftPanel