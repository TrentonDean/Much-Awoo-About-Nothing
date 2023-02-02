import React, {useState, useEffect} from "react"; // done by Aimee
import axios from "axios";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { useNavigate, Link } from "react-router-dom";

const HomePage = (props) => {
    const navigate = useNavigate()
    const {currentUser, setCurrentUser} =props;
    const [bodyPosts, setBodyPosts] =useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/currentUser", {withCredentials:true})
        .then(res=>{
            console.log("home page",res.data)
            setCurrentUser({
                _id: res.data._id,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                dogs: res.data.dogs
        })
        })
        .catch(err=>{console.log("logged in user fetch error", err)
    })
    },[])

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
            <LeftPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <div id="postContainer">
                {bodyPosts.map((item,id)=>{
                    return(
                        <div className="post">
                            <Link to={`/post/${item._id}`} className="linkFont">{item.title}</Link>
                            <p>{item.body}</p>
                            <p>{item.tags}</p>
                            <Link to={`/post/edit/${item._id}`}>Edit</Link>
                        </div>
                    )
                })}

                {/* Testing Style */}
                {/* <div className="post">
                    <p className="linkFont">Title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
                    <p>tag</p>
                    <p>Edit Link</p>
                </div>
                <div className="post">
                    <p className="linkFont">Title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
                    <p>tag</p>
                    <p>Edit Link</p>
                </div>
                <div className="post">
                    <p className="linkFont">Title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
                    <p>tag</p>
                    <p>Edit Link</p>
                </div> */}
                
            </div>
            <RightPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    )
}

export default HomePage