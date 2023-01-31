import React from 'react'
import {useNavigate} from "react-router-dom"

const NavBar = (props) => {
    const navigate = useNavigate()

    const goToLogReg = () => {
      navigate("/login_registration")
    }
    const goToHome = () => {
      navigate("/")
    }
    const goToProfile = () => {
      navigate("/profile")
    }
    const goToCompose = () => {
      navigate("/compose")
    }
  return (
    <div id="navBar">
        
        <div id="pawContainer">
            <div id="navButtonsContainer">
                <button id="toeBean1" class="navBarButton" onClick={goToLogReg}>Login/<br />Register</button>
                <button id="toeBean2" class="navBarButton" onClick={goToHome}>Home</button>
                <button id="toeBean2" class="navBarButton" onClick={goToProfile}>Profile</button>
                <button id="toeBean1" class="navBarButton"onClick={goToCompose}>Write A<br /> Post</button>
            </div>
            <div id="centerOfPaw"></div>
        </div>
        <p id="navBarTitle">Much Awoo About Nothing</p>
    </div>
  )
}

export default NavBar