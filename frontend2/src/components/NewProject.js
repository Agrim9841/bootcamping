import React from 'react';

const NewProject = () => {
    return(
        <div className="content my-5" style={{ width: "100%", boxSizing: "border-box", paddingLeft: "4%", paddingRight: "4%" }}>
            <h1>New Project</h1>
            <hr className="mb-5" style={{ backgroundColor: "rgb(200,200,200)", height: "1px" }} />
            <div className="columns is-multiline is-spaceless">
                <div className="column is-3">Project Name</div>
                <div className="column is-9">
                    <input className="input is-primary" type="text"/>
                </div>
                <div className="column is-3">Project Description</div>
                <div className="column is-9">
                    <textarea class="textarea is-primary" rows="7"
                     placeholder="At least 20 words description is required."></textarea>
                </div>
                <div className="column is-3">Tools Used</div>
                <div className="column is-9">
                    <input className="input is-primary" type="text"
                     placeholder="eg. NodeJS, React, Bootstrap"/>
                </div>

                <div className="column is-3">Repositary Link</div>
                <div className="column is-9">
                    <input className="input is-primary" type="url"
                     placeholder="eg. https://www.example.com"/>
                </div>

                <div className="column is-3">Demonstration Link</div>
                <div className="column is-9">
                    <input className="input is-primary" type="url"
                     placeholder="eg. https://www.example.com"/>
                </div>

                <div className="column is-12">
                    <label class="checkbox">
                        <input type="checkbox"/> Post Update
                    </label>
                </div>
                
                <div className="column is-3">Update Info</div>
                <div className="column is-9">
                    <input className="input is-primary" type="text"
                     placeholder="eg. Hello everyone!! Please checkout my new project and give some feedback to me. Thank you."/>
                </div>
            </div>
            <div className="button mt-4 is-success is-medium is-pulled-right">Add Project <i className="fa fa-plus ml-2" aria-hidden="true"></i></div>
        </div>
    )
}

export default NewProject;