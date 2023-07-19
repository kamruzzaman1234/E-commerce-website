import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = ()=>{
    return(
       
            <div className="blog-card">
                <div className="card-img">
                    <img src="images/man1.jpg" alt="Man" className="img-fluid w-100"/>
                    <div className="blog-content">
                            <p className="data">11 June 2022</p>
                            <h5 className="title">A beautiful sunday Morning Renaissance</h5>
                            <p className="decs">Loream ispum dollar sit amet and conceptetur
                            and addipising some loream ispum more than update</p>
                            <Link to="/blog/:id"
                            className="text-decoration-none button">Read More</Link>
                    </div>  
                </div>
            </div>
      
    )
}
export default BlogCard;