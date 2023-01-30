import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDog = () => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [bio, setBio] = useState('')
    const [tricks, setTricks] = useState('')
    const [owner, setOwner] = useState('')

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/createDog", {
            name,
            breed,
            bio,
            tricks,
            owner // not sure how to connect the owner -AY
        }).then((res) => {
            console.log(res);
            console.log("catch from back-end")
            navigate("/homePage")
        }).catch((err) => {
            console.log(err)
            console.log("error from front-end")
        })
    }

    return (
        <div id="siteContainer">
                <form onSubmit = {submitHandler} className="formContent" >
                    <h2>Add Your Dog!</h2>
                    <div>
                        <label>Name:</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} /> 
                    </div>
                    <div>
                        <label>Breed:</label>
                        <input type="text" onChange={(e) => setBreed(e.target.value)} /> 
                    </div>
                    <div>
                        <label>Bio:</label>
                        <input type="text" onChange={(e) => setBio(e.target.value)} /> 
                    </div>
                    <div>
                        <label>Tricks:</label>
                        <input type="text" onChange={(e) => setTricks(e.target.value)} /> 
                    </div>
                    <div>
                        <button>Add Dog</button>
                    </div>
                </form>
        </div>
    )
}

export default CreateDog;