import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const EditPost = (props) => {
    const {currentUser, setCurrentUser} =props;
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
            console.log("edit page",res.data)
            setCurrentUser({
                _id: res.data._id,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                dogs: res.data.dogs
        })
        })
        .catch(err=>console.log("logged in user fetch error", err))
    },[])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/getOnePost/"+id, {withCredentials:true})
        .then(res=>{
            console.log("post data", res.data)
            setTitle(res.data.title)
            setBody(res.data.body)
            setTags(res.data.tags)
        })
        .catch(err=>console.log("error with post fetch", err))
    },[])

    const deletePost = (postId) => {
        axios.delete("http://localhost:8000/api/deletePost"+id)
        .then(res=>{
            console.log("Post deleted!")
        })
        .catch(err=>console.log("Error deleting post.", err))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/updatePost/"+id,{
            title,
            body,
            tags
        }, {withCredentials:true})
        .then(res=>{
            console.log("Successful edit")
            navigate(`/post/${id}`)
        })
        .catch(err=>console.log("Error updating post.", err))
    }

    return (
        <div>
            <div>
            <LeftPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <div id="composeForm">
                    <div>
                        <h2>Edit Post!</h2>
                        <form onSubmit={submitHandler} >
                            <div>
                                <label>Post Title: </label>
                                <input type="text" defaultValue={title} value={title} id="title" onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div>
                                <label>Post Body: </label>
                                <textarea defaultValue={body} id="body" onChange={(e) => setBody(e.target.value)} />
                            </div>
                            <div>
                                <label>Tags: </label>
                                <input type="text" defaultValue={tags} id="tags" onChange={(e) => setTags(e.target.value)}></input>
                            </div>
                            <div>
                                <button>Update</button>
                                <button onClick={()=>{deletePost(id)}}>Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <RightPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    )
}

export default EditPost;