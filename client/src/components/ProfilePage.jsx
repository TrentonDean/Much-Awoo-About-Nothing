import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
const userPic = require("../assets/user_pfp.png")
const dogPic = require("../assets/dog_pfp.png")


const ProfilePage = (props) => {
  const {currentUser, setCurrentUser} =props;
  const [firstName, setFirstName] =useState("")
  const [lastName, setLastName] =useState("")
  const [email, setEmail] =useState("")
  const [dogs, setDogs] =useState([])
  const [profilePic, setProfilePic] =useState("")
  const [bio, setBio] =useState("")
  const [dogId, setDogId] =useState("")
  const [dogName, setDogName] =useState("")
  const [breed, setBreed] =useState("")
  const [dogBio, setDogBio] =useState("")
  const [tricks, setTricks] =useState("")
  const [owner, setOwner] =useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/api/currentUser", {withCredentials:true})
    .then(res=>{
        console.log("edit page",res.data)
        setCurrentUser({
            _id: res.data._id,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            dogs: res.data.dogs
      })
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setEmail(res.data.email)
      setDogs(res.data.dogs)
      setBio(res.data.bio)
      if(res.data.dogs.length>0){
        setDogId(res.data.dogs[0]._id)
      setDogName(res.data.dogs[0].name)
      setBreed(res.data.dogs[0].breed)
      setDogBio(res.data.dogs[0].bio)
      setTricks(res.data.dogs[0].tricks)
      setOwner(res.data.dogs[0].owner)
      }
      
    })
    .catch(err=>console.log("logged in user fetch error", err))
},[])

const updateUserHandler = (e) => {
  e.preventDefault()
  axios.put("http://localhost:8000/api/user/"+currentUser._id,{
    firstName,
    lastName,
    email,
    dogs,
    bio:bio
  }, {withCredentials:true})
  .then (res=>console.log("successful update!"))
  .catch(err=>console.log("Error updating profile.", err))
}

const updateDogHandler = (e) => {
  e.preventDefault()
  if(dogId===""){
    axios.post("http://localhost:8000/api/createDog",{
    name: dogName,
    breed,
    bio:dogBio,
    tricks,
    owner:currentUser._id
    }, {withCredentials:true})
    .then(res=>console.log("successful pup add!"))
    .catch(err=>console.log("Error adding pup.", err))
  }else{
    axios.put("http://localhost:8000/api/updateDog/"+dogId,{
    name: dogName,
    breed,
    bio:dogBio,
    tricks,
    owner
  }, {withCredentials:true})
  .then(res=>console.log("successful pupdate!"))
  .catch(err=>console.log("Error pupdating.", err))
  }
  
}

  return (
    <div>
      <LeftPanel />
      <div class="updateFormsContainer">
        <div>
          <img class="userImage" alt="the current user's face" src={userPic}></img>
          <form id="userForm" onSubmit={updateUserHandler}>
            <label>First Name:</label>
            <input type="text" defaultValue={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            <label>Last Name:</label>
            <input type="text" defaultValue={lastName} onChange={(e)=>setLastName(e.target.value)} />
            <label>Email:</label>
            <input type="email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Short Bio:</label>
            <textarea defaultValue={bio} onChange={(e)=>setBio(e.target.value)}></textarea>
          <button>Update!</button>
          </form>
        </div>
        <div>
        <img class="dogImage" alt="the current user's dog" src={dogPic}></img>
        <form id="dogForm" onSubmit={updateDogHandler}>
          <label>Name:</label>
          <input type="text" defaultValue={dogName} onChange={(e)=>setDogName(e.target.value)} />
          <label>Breed:</label>
          <input type="text" defaultValue={breed} onChange={(e)=>setBreed(e.target.value)} />
          <label>Tricks:</label>
          <input type="text" defaultValue={tricks} onChange={(e)=>setTricks(e.target.value)} />
          <label>Everything you want to say about your pup:</label>
          <textarea defaultValue={dogBio} onChange={(e)=>setDogBio(e.target.value)}></textarea>
          <button>Pupdate!</button>
        </form>
        </div>
      </div>
      
    </div>
  )
}

export default ProfilePage