import React, {useState, useEffect} from "react"; // done by Aimee
import axios from "axios";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";


const HomePage = (props) => {
    const {currentUser, setCurrentUser} =props;
    const [bodyPosts, setBodyPosts] =useState([]);

    useEffect(()=>{
        //get user data if logged in
    })

    useEffect(()=>{
        axios.get("http://localhost:8000/api/getAllPosts/")
        .then(res=>{
            let postArray = res.data
            let chronOrderPosts = postArray.sort(
                (a,b)=>(a.createdAt<b.createdAt) ? 1 : (a.createdAt>b.createdAt) ? -1 :0
            )
            setBodyPosts(chronOrderPosts)
        }
        )
    })
    
  return (
    <div>
        <LeftPanel />
        <div id="postContainer">
            {bodyPosts.map((item,id)=>{
                return(
                    <div>
                        <p>{item.title}</p>
                        <p>{item.body}</p>
                        <p>{item.tags}</p>
                    </div>
                )
            })}
            
        </div>
        <RightPanel />
    </div>
  )
}

export default HomePage