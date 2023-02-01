import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RightPanel = (props) => {
    const {currentUser, setCurrentUser} =props
    const [pastPosts, setPastPosts] =useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/getAllPosts/", {withCredentials:true})
        .then(res=>{
            console.log("right panel data",res.data)
            let postArray = res.data
            let chronOrderPosts = postArray.sort(
                (a,b)=>(a.createdAt<b.createdAt) ? 1 : (a.createdAt>b.createdAt) ? -1 :0
            )
            
            // if(!pastPosts){
            //     setPastPosts(chronOrderPosts)
            // }else{
            //     setPastPosts({date: "Today", title:"We need your stories!"})
            // }
                setPastPosts(chronOrderPosts)
        }
        )
        .catch(err=>console.log("Error getting all posts for right panel.", err))
    },[])

    console.log("pastposts",pastPosts)

    return (
    <div id="rightPanelContainer">
        {pastPosts.map((post, id)=>{
            return(
                <Link to={`/post/${post._id}`}>{post.title}</Link>
            )
        })}
        
    </div>
  )
}

export default RightPanel