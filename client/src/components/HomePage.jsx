import React, {useState, useEffect} from "react"; // done by Aimee
import axios from "axios";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";


const HomePage = (props) => {
    const {currentUser, setCurrentUser} =props;

    useEffect(()=>{
        //get user data if logged in
    })

    useEffect(()=>{
        //get posts, display in reverse chrono order (can we get that in an axios request?)
    })
    
  return (
    <div>
        <LeftPanel />
        <div id="postContainer">
            //iterate on posts here
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Magna etiam tempor orci eu. Diam volutpat commodo sed egestas egestas. Dictum non consectetur a erat nam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Ut tellus elementum sagittis vitae et leo. Vulputate mi sit amet mauris commodo quis imperdiet. Morbi tempus iaculis urna id volutpat lacus laoreet non. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
            
        </div>
        <RightPanel />
    </div>
  )
}

export default HomePage