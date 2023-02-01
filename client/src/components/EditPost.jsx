import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import LeftPanel from "./LeftPanel";

const EditPost = () => {
    const {currentUser, setCurrentUser} =useState;
    const{id} = useParams();

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")

    const [errors, setErrors] = useState({})
    const [postNotFound, setPostNotFound] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/currentUser", {withCredentials:true})
        .then(res=>{
            console.log(res.data)
        })
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div id="formContainer">
            <LeftPanel />
            <div id="composeForm">
                <h2>Edit Post</h2>
                <form onSubmit={submitHandler} >
                    <div>
                        <label>Post Title: </label>
                        <input type="text" value={title} id="title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label>Post Body: </label>
                        <textarea value={body} id="body" onChange={(e) => setBody(e.target.value)} />
                    </div>
                    <div>
                        <label>Tags: </label>
                        <input type="text" value={tags} id="tags" onChange={(e) => setTags(e.target.value)}></input>
                    </div>
                    <div>
                        <button>Update</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default EditPost;