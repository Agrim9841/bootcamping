import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { blogs } from './MyProjectAndBlogList';

const MyBlogs = () => {
    let history = useHistory();

    return (
        <div className="content my-5" style={{ width: "100%", boxSizing: "border-box", paddingLeft: "4%", paddingRight: "4%" }}>
            <h1>All Blogs</h1>
            <hr className="mb-1" style={{ backgroundColor: "rgb(200,200,200)", height: "1px" }} />
            <div className="is-size-7 has-text-grey-light has-text-weight-medium is-flex is-justify-content-flex-end is-align-items-center">
                Sort By: <div className="select ml-3">
                    <select>
                        <option>Date Added</option>
                        <option>Date Modified</option>
                        <option>Name</option>
                    </select>
                </div>

            </div>

            {blogs.map((blog)=>{
                return(
                    <div className="box mt-5 is-flex is-justify-content-space-between is-clickable" onClick={()=> history.push(`/blog/${blog.id}`)}>
                        <div style={{ flexGrow: "1" }}>
                            <h2>{ blog.name }</h2>
                            <hr className="my-0" style={{ backgroundColor: "rgb(200,200,200)", height: "1px", width: "70%" }} />
                            <p>{ blog.description }</p>
                        </div>
                        <div className="button is-button-primary is-info"><i class="fa fa-pencil"></i></div>
                    </div>
                )
            })}

            <Link to="/newblog" className="button is-success is-medium is-pulled-right">Add New Blog <i className="fa fa-plus ml-2" aria-hidden="true"></i></Link>
        </div>
    )
}

export default MyBlogs;