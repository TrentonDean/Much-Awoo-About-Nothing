import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const ComposePost = (props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")

    const {currentUser, setCurrentUser} = props;

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/currentUser", {withCredentials:true})
        .then(res=>{
            console.log(res.data)
            setCurrentUser({
                _id: res.data._id,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                dogs: res.data.dogs
        })
        })
        .catch(err=>console.log("logged in user fetch error", err))
    },[])


    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/composePost", {
            title,
            body,
            tags
        }, {withCredentials: true})
        .then(res => {
            console.log("Posted!")
            console.log(res)
            setTitle("")
            setTags("")
            setBody("")
            navigate("/")
        })
        .catch(err=> {
            console.log("Error posting.", err)
            setErrors(err.response.data.errors)
        })
        e.target.reset()
    }

    return (
        <div >
            <div>
            <LeftPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <div id="composeForm">
                    <div>
                        <h2>Make a Post!</h2>
                        <form onSubmit={submitHandler} >
                            <div>
                                <label>Post Title: </label>
                                <input type="text" defaultValue={""} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div>
                                <label>Post Body: </label>
                                <textarea defaultValue={""} onChange={(e) => setBody(e.target.value)} />
                            </div>
                            <div>
                                <label>Tags: </label>
                                <input type="text" defaultValue={""} onChange={(e) => setTags(e.target.value)}></input>
                            </div>
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <RightPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    )
}

export default ComposePost;