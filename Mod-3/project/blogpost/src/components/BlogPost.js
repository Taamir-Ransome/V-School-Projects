import React from "react"

function BlogPost(props) {
    return (
        <div>
            <h2>{props.blogger.title}</h2>
            <p>{props.blogger.author}</p>
    
        </div>
        
    )
}

export default BlogPost