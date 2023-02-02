import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const OnePost = (props) => {
    const {currentUser, setCurrentUser} =props;
    const [title, setTitle] =useState("")
    const [body, setBody] =useState("")
    const [tags, setTags] =useState("")
    const {id} = useParams();

    const[onePost, setOnePost] = useState({});

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

    useEffect(() => {
        axios.get("http://localhost:8000/api/getOnePost/"+id, {withCredentials:true})
        .then(res=>{
            console.log(res.data)
            setTitle(res.data.title)
            setBody(res.data.body)
            setTags(res.data.tags)

        })
    }, []);

    const editPost = (postId) => {
        navigate(`/post/edit/${id}`)
    }

    const deletePost = (postId) => {
        axios.delete("http://localhost:8000/api/deletePost"+id)
        .then(res=>{
            console.log("Post deleted!")
        })
        .catch(err=>console.log("Error deleting post.", err))
    }

    return (
        <div>
            <LeftPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <div id="composeForm">
                <div>
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{tags}</p>
                    <button onClick={()=>{editPost(id)}}>Edit</button>
                    <button onClick={()=>{deletePost(id)}}>Delete</button>
                </div>
                
            </div>
            <RightPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    )
}

export default OnePost;