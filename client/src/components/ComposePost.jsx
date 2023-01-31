import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import LeftPanel from "./LeftPanel";

const ComposePost = (props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")

    const {currentUser, setCurrentUser} = props;

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/composePost", {
            title,
            body,
            tags
        }).then((res) => {
            console.log(res)
            console.log("catch from back-end")
            navigate('/')
        }).catch((err) => {
            console.log(err);
            // setErrors(err.response.data.errors);
        })
    }

    return (
        <div id="formContainer">
            <div>
                {/* put profile of user and dog here? */}
            </div>
            <LeftPanel />
            <div id="composeForm">
                <h2>Make a Post!</h2>
                <form onSubmit={submitHandler} >
                    <div>
                        <label>Post Title: </label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} />
                        {/* {errors.title ? <span>{errors.title.message}</span> : null} */}
                    </div>
                    <div>
                        <label>Post Body: </label>
                        <textarea onChange={(e) => setBody(e.target.value)} />
                        {/* {errors.body ? <span>{errors.body.message}</span> : null} */}
                    </div>
                    <div>
                        <label>Tags: </label>
                        <input type="text" onChange={(e) => setTags(e.target.value)}></input>
                        {/* {errors.tags ? <span>{errors.tags.message}</span> : null} */}
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ComposePost;