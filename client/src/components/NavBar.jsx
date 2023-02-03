import React from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const NavBar = (props) => {
    const {currentUser, setCurrentUser} =props;
    const navigate = useNavigate()

    const goToLogReg = () => {
      navigate("/login_registration")
    }
    const goToHome = () => {
      navigate("/")
    }
    const goToProfile = () => {
      navigate(`/profile/${currentUser._id}`)
    }
    const goToCompose = () => {
      navigate("/compose")
    }

    const logoutUser = () => {
      axios.post("http://localhost:8000/api/logout", {withCredentials:true})
      .then(res=>{
        console.log("logged out", res)
        setCurrentUser(null)
        navigate("/")
      })
      .catch(err=>console.log("error loggin out", err))
    }
  return (
    <div id="navBar">
        
        <div id="pawContainer">
            <div id="navButtonsContainer">
                <button id="toeBean1" class="navBarButton" onClick={goToLogReg}>Login/<br />Register</button>
                <button id="toeBean2" class="navBarButton" onClick={goToHome}>Home</button>
                <button id="toeBean2" class="navBarButton" onClick={goToProfile}>Profile</button>
                <button id="toeBean1" class="navBarButton" onClick={goToCompose}>Write A<br /> Post</button>
            </div>
            <div id="centerOfPaw"></div>
        </div>
        <p id="navBarTitle">Much Awoo About Nothing</p>
        <button type='button' onClick={logoutUser} id="bonebutton">
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3"></div>
          <div className="c4"></div>
          <div className='b1'>
            <div className='b2'>
              Logawooooout
            </div>
          </div>
        </button>
    </div>
  )
}

export default NavBar