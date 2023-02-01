import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

//the file anme keeps saving in lower caps
const LogReg = (props) => {
    const {currentUser, setCurrentUser} =props
    const [firstName, setFirstName] =useState("")
    const [lastName, setLastName] =useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmP, setConfirmP] =useState("")

    const [errors, setErrors] =useState("")
    const navigate = useNavigate()

    const loginUserHandler = (e) => {
        e.preventDefault()
        //need route for login
        axios.post("",{
        	email,
        	password
        },{withCredentials:true, credentials:"include"})
        .then((res)=>{
        	console.log("successfully logged in", res)
        	setCurrentUser({
            _id:res.data.user._id,
            firstName:res.data.user.firstName,
            lastName:res.data.user.lastName,
            email:res.data.user.email,
            dogName:res.data.user.dogName
            })
            //need page to route to
            navigate("http://localhost:8000/api/login")
        }).catch(err=>{
        	console.log("Login error.", err)
        	setErrors(err.response.data.error)
        })}

    //to automatically log new users in on registration
    const autoLogin = (email, password) => {
        //needs login route
        axios.post("http://localhost:8000/api/login", {
            email,
            password
        }, {withCredentials:true, credentials:"include"})
            .then(res=>{
                console.log("Successfully logged in after registration.", res)
                setCurrentUser({
                    _id:res.data.user._id,
                    userName:res.data.user.userName,
                    email:res.data.user.email})
                    //need page to route to
                    navigate("")
            }).catch(err=>{
                console.log("Autologin error.", err)
            })
    }

    const registrationHandler = (e) => {
        e.preventDefault()
        //need registration route
        axios.post("http://localhost:8000/api/register", {
            firstName,
            lastName,
            email,
            password,
            confirmP,
        },{withCredentials:true, credentials:"include"})
        .then((res)=>{
            console.log("guess it worked",res)
            autoLogin(email, password)
            navigate("/")
        }).catch(err=>{
            console.log("Error with user registration function.", err)
            setErrors(err.response.data.errors)
        })
    }

	return (
    <div id="logRegComponent">
        	{/* //login form */}
        <div>
        	<form class="logRegForm" onSubmit={loginUserHandler}>
        		<label>Email:</label>
        		<input type="text" onChange={(e)=>setEmail(e.target.value)} />
				<label>Password:</label>
				<input type="password" onChange={(e)=>setPassword(e.target.value)} />
				<button class="border border-neon-yellow">Login</button>
        	</form>
        	{errors && <span>{errors}</span>}
        </div>
        {/* //registration form */}
        <div >
        	<form class="logRegForm" onSubmit={registrationHandler}>
				<label>First name:</label>
				<input type="text" onChange={(e)=>setFirstName(e.target.value)} />
				{errors.firstName && <span>{errors.firstName.message}</span>}
				<label>Last name:</label>
				<input type="text" onChange={(e)=>setLastName(e.target.value)} />
				{errors.lastName && <span>{errors.lastName.message}</span>}
				<label>Email:</label>
				<input type="text" onChange={(e)=>setEmail(e.target.value)} />
				{errors.email && <span>{errors.email.message}</span>}
				<label>Password:</label>
				<input type="password" onChange={(e)=>setPassword(e.target.value)} />
				{errors.password && <span>{errors.password.message}</span>}
				<label>Confirm Password:</label>
				<input type="password" onChange={(e)=>setConfirmP(e.target.value)} />
				{errors.confirmP && <span>{errors.confirmP.message}</span>}
				<button class="border border-neon-yellow">Sign up!</button>
			</form>
        </div>

    </div>
	)
}

export default LogReg