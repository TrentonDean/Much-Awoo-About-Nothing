import React from 'react'

const RightPanel = () => {
//   const pastPosts = null
    const pastPosts = [{date:"0/0/0000", title: "Title"},{date:"0/0/0000", title: "Title"},{date:"0/0/0000", title: "Title"},{date:"0/0/0000", title: "Title"},{date:"0/0/0000", title: "Title"},{date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, {date:"0/0/0000", title: "Title"}, ]
//   logic to pull past posts by user id
    return (
    <div id="rightPanelContainer">
        {pastPosts.map((post, id)=>{
            return(
                <p>{post.date}||{post.title}</p>
            )
        })}
        {/* iterate on list to display posts using pastPosts(?) */}
        {pastPosts === null && <span>No posts to show!</span>}
    </div>
  )
}

export default RightPanel