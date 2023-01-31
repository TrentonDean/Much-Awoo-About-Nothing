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
        // Add axios code here once post controllers are done
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
                    </div>
                    <div>
                        <label>Post Body: </label>
                        <textarea onChange={(e) => setBody(e.target.value)} />
                    </div>
                    <div>
                        <label>Tags: </label>
                        <input type="text" onChange={(e) => setTags(e.target.value)}></input>
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