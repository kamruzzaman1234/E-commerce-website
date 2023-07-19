import React from 'react';
import Meta from '../components/Meta';
import BradCrump from '../components/BradCrump';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi'
const SingleBlog = ()=>{
    return(
        <div>
            <Meta title={"Dynamic Blog Name"}/>
            <BradCrump title="Dynamic Blog Name"/>
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container xxl">
                    <div className="row">
                       <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blog" className="d-flex align-items-center gap-10">
                                     <HiOutlineArrowLeft className="fs-4"/> Go Back to Blog</Link>
                                <h3 className="title">
                                A Beautiful Sunday Morning Renaissance 
                                </h3>
                                <img src="images/man1.jpg"
                                 className="img-fluid w-100 my-4"
                                 alt="Images"/>
                                <p>You are only as good as your last collection , which is an
                                    enorousrs pressure. I think there is something about luxey
                                    It's not something people need, but its what they want. It realy
                                    pulls their heart .  I have a fantastic relationship with many.
                                    Secorlrience of the other some related of on the something other
                                    hand and the some thing product .they are many location and the ther wise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleBlog;