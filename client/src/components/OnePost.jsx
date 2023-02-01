import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const OnePost = (props) => {
    const {currentUser, setCurrentUser} =props;
    const [title, setTitle] =useState("")
    const [body, setBody] =useState("")
    const [tags, setTags] =useState("")
    const {id} = useParams();

    const[onePost, setOnePost] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/getOnePost/"+id, {withCredentials:true})
        .then(res=>{
            console.log(res.data)
            setTitle(res.data.title)
            setBody(res.data.body)
            setTags(res.data.tags)

        })
    }, [id]);

    // I'm not sure if you want to add the delete feature here or elsewhere
    const deleteFilter = () => {

    }

    return (
        <div>
            <p>{title}</p>
            <p>{body}</p>
            <p>{tags}</p>
        </div>
    )
}

export default OnePost;