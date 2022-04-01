import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from './MyProjectAndBlogList';

const Blog = () => {
    const { id } = useParams();
    
    const [ blog, setBlog ] = useState({});

    useEffect(()=>{
        let temp = {};
        blogs.forEach(blog=>{
            if(blog.id === id){
                temp = blog;
            }
        });
        setBlog(temp);
    }, [id]);

    return (
        <div style={{ width: "100%", boxSizing: "border-box", paddingLeft: "4%", paddingRight: "4%" }}>
            <div className="box mt-5 content">
                <div className="is-size-7 has-text-grey-light">Agrim Das Tuladhar</div>
                <div className="is-size-7 has-text-grey-light">12 Jan 2021, 10:22am</div>
                <h2 className="my-3">{blog.name}Photo Gallary</h2>
                <p>{blog.description}A website where you can store all your images and retrive it at any moment. ( Similar to Google Photoes )</p>
                {/* {
                    blog.url? */}
                    <div style={{display: "flex", marginBottom: "5px", width: "100%"}}>
                        <div style={{width: "20%"}}>Repo Url:</div>
                        <div>Null</div>
                    </div>
                    <div style={{display: "flex", marginBottom: "5px", width: "100%"}}>
                        <div style={{width: "20%"}}>Demo Url:</div>
                        <div>
                            <a href={blog.url}><i class="fa fa-link" aria-hidden="true"></i> https://my-web-gallary.netlify.app/{blog.url}</a>
                        </div>
                    </div> 
                    <div style={{display: "flex", marginBottom: "5px", width: "100%"}}>
                        <div style={{width: "20%"}}>Collaborators:</div>
                        <div>None</div>
                    </div> 
                        {/* : null */}
                {/* } */}
                <div className="columns is-gapless lc-section p-1 mb-2 mt-3 is-clickable">
                    <a href="#" style={{ textAlign: "center" }}>View Updates</a>
                </div>
                <div className="columns is-gapless">
                    <div className="column is-11 is-flex">
                        <div className="comment-icon">AT</div>
                        <input className="comment-input" placeholder="Enter your comment here" />
                    </div>
                    <div className="column is-1">
                        <button className="button is-primary is-fullwidth is-inverted"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>

                
                {/* <p className="mt-3">
                    
                </p> */}
            </div>
            <div style={{ fontWeight: "bold", textAlign: "center", marginTop: "15px"}}>
                    No comments yet
                </div>
        </div>
    )
}

export default Blog;