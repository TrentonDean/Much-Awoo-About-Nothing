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

      {/* Testing Style */}
      {/* <span>
        <img className="userImage" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX/AAD/oKD/o6P/q6v/tLT/v7//y8v/paX/vLz/39//mpr/nJz//v7/8/P/5eX/2dn/0dH/rq7/rKyn8lSHAAABdUlEQVR4nO3dSU7EMABFQbu7A8083P+wsGADGxBSFL2kyhf4b2nJksfj0/PL683NsizXy6fzl9vTN/P/Tr86/8Xb5S+Wn6534zL27X73hVNh3hznrSesTGGfwj6FfQr7FPYdofB26wkrm+O09YSVKexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9s3Ps28K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insO0Lh/l8MKaxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insO8Ihfv/o2T//8worFPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2Kew7QuH71hNWNsdl6wkrU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BvjuvWE1Y2x7L1hJUp7FPYp7BPYZ/CPoV9CvuOULj3G/DDuLufe/bw+gHO+QcZs4I2swAAAABJRU5ErkJggg=='></img>
        <p className="userNameSide">FirstName</p>
        <p className="userBioSide">I'm a dog person</p>
        <img className="dogImage" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX/AAD/oKD/o6P/q6v/tLT/v7//y8v/paX/vLz/39//mpr/nJz//v7/8/P/5eX/2dn/0dH/rq7/rKyn8lSHAAABdUlEQVR4nO3dSU7EMABFQbu7A8083P+wsGADGxBSFL2kyhf4b2nJksfj0/PL683NsizXy6fzl9vTN/P/Tr86/8Xb5S+Wn6534zL27X73hVNh3hznrSesTGGfwj6FfQr7FPYdofB26wkrm+O09YSVKexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9s3Ps28K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insO0Lh/l8MKaxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insO8Ihfv/o2T//8worFPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2Kew7QuH71hNWNsdl6wkrU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BvjuvWE1Y2x7L1hJUp7FPYp7BPYZ/CPoV9CvuOULj3G/DDuLufe/bw+gHO+QcZs4I2swAAAABJRU5ErkJggg=='></img>
        <p className="dogNameSide">DogName</p>
      </span> */}
      
    </div>
  )
}

export default LeftPanel