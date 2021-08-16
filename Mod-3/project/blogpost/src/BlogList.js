import React from "react"
import BlogPost from "./components/BlogPost"
import blogData from "./blogData"

function BlogList() {
    const blogComp = blogData.map(item => <BlogPost blogger={item}/>)
    
  return (
    <div>
        {blogComp}
    </div>
  )
}


export default BlogList