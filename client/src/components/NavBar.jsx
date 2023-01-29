import React from 'react'
import {useNavigate} from "react-router-dom"

const NavBar = (props) => {
    const navigate = useNavigate()
  return (
    <div id="navBar">
        
        <div id="pawContainer">
            <div id="navButtonsContainer">
                <button id="toeBean1" class="navBarButton">Login/<br />Register</button>
                <button id="toeBean2" class="navBarButton">Home</button>
                <button id="toeBean2" class="navBarButton">Profile</button>
                <button id="toeBean1" class="navBarButton">Write A<br /> Post</button>
            </div>
            <div id="centerOfPaw"></div>
        </div>
        <p id="navBarTitle">Much Awoo About Nothing</p>
    </div>
  )
}

export default NavBar