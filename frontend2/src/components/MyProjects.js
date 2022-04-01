import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { projects } from './MyProjectAndBlogList';

const MyProjects = () => {
    const history = useHistory();

    return(
        <div className="content my-5" style={{ width: "100%", boxSizing: "border-box", paddingLeft: "4%", paddingRight: "4%" }}>
            <h1>All Projects</h1>
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

            {projects.map((project)=>{
                return(
                    <div className="box mt-5 is-flex is-justify-content-space-between" onClick={()=> history.push(`/blog/${project.id}`)}>
                        <div style={{ flexGrow: "1" }}> 
                            <h2>{ project.name }</h2>
                            <hr className="my-0" style={{ backgroundColor: "rgb(200,200,200)", height: "1px", width: "70%" }} />
                            <p>{ project.description }</p>
                        </div>
                        <div className="button is-button-primary is-info"><i class="fa fa-pencil"></i></div>
                    </div>
                )
            })}

            <Link to="/newproject" className="button is-success is-medium is-pulled-right">Add New Project <i className="fa fa-plus ml-2" aria-hidden="true"></i></Link>
        </div>
    )
}

export default MyProjects;