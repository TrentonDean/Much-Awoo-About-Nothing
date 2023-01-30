import React from 'react'
const userPic = require("../assets/user_pfp.png")


const LeftPanel = () => {
    // need to fetch user/dog info here

  return (
    <div id="leftPanelContainer">
        <div class="userImage">
            <img src={userPic}></img>
        </div>
    </div>
  )
}

export default LeftPanel