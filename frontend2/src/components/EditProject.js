import React from 'react';

const EditProject = () => {
    return(
        <div className="content my-5" style={{ width: "100%", boxSizing: "border-box", paddingLeft: "4%", paddingRight: "4%" }}>
            <h1>Edit Project</h1>
            <hr className="mb-5" style={{ backgroundColor: "rgb(200,200,200)", height: "1px" }} />
            <div className="columns is-multiline is-spaceless">
                <div className="column is-3">Project Name</div>
                <div className="column is-9">
                    <input className="input is-primary" type="text" value="Photo Gallery"/>
                </div>
                <div className="column is-3">Project Description</div>
                <div className="column is-9">
                    <textarea class="textarea is-primary" rows="7"
                     placeholder="At least 20 words description is required.">
                         A website where you can store all your images and retrive it at any moment. ( Similar to Google Photoes )
                     </textarea>
                </div>
                <div className="column is-3">Tools Used</div>
                <div className="column is-9">
                    
                    <div className="has-text-primary-dark is-size-7">Enter new tools used here:</div>
                    <div className="columns is-gapless">
                        <div className="column is-11">
                            <input className="input is-primary" type="text"
                             placeholder="eg. NodeJS, React, Bootstrap"/>
                        </div>
                        <div className="column">
                            <button className="button is-primary is-fullwidth"><i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="columns is-multiline">
                        <div className="column is-one-third visible-parent">
                            ReactJS
                            <button className="button is-danger is-small ml-3 visible-onhover-child">
                                <i class="fa fa-minus"></i>
                            </button>
                        </div>
                        <div className="column is-one-third visible-parent">
                            Firebase
                            <button className="button is-danger is-small ml-3 visible-onhover-child">
                                <i class="fa fa-minus"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="column is-3">Repositary Link</div>
                <div className="column is-9">
                    <input className="input is-primary" type="url"
                     placeholder="eg. https://www.example.com"/>
                </div>

                <div className="column is-3">Demonstration Link</div>
                <div className="column is-9">
                    <input className="input is-primary" type="url"
                     value="https://my-web-gallary.netlify.app/"
                     placeholder="eg. https://www.example.com"/>
                </div>

            </div>
            <div className="button mt-4 is-success is-medium is-pulled-right">Edit Project <i className="fa fa-pencil ml-2" aria-hidden="true"></i></div>
        </div>
    )
}

export default EditProject;