import React, {useState, useEffect} from "react"; // done by Aimee
import axios from "axios";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { useNavigate, Link } from "react-router-dom";

const HomePage = (props) => {
    const navigate = useNavigate()
    const {currentUser, setCurrentUser} =props;
    const [bodyPosts, setBodyPosts] =useState([]);

    useEffect(()=>{
        //get user data if logged in
    })


    useEffect(()=>{
        axios.get("http://localhost:8000/api/getAllPosts/", {withCredentials:true})
        .then(res=>{
            console.log(res.data)
            let postArray = res.data
            let chronOrderPosts = postArray.sort(
                (a,b)=>(a.createdAt<b.createdAt) ? 1 : (a.createdAt>b.createdAt) ? -1 :0
            )
            setBodyPosts(chronOrderPosts)
        }
        )
    },[])
    
  return (
    <div>
        <LeftPanel />
        <div id="postContainer">
            {bodyPosts.map((item,id)=>{
                return(
                    <div>
                        <Link to={`/post/${item._id}`}>{item.title}</Link>
                        <p>{item.body}</p>
                        <p>{item.tags}</p>
                        <Link to={`/post/edit/${item._id}`}>Edit</Link>
                    </div>
                )
            })}
            
        </div>
        <RightPanel />
    </div>
  )
}

export default HomePage