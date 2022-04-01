import React from "react";

const Dashboard = () => {
    return(
        <div className="content" style={{ width: "100%", boxSizing: "border-box", paddingLeft: "4%", paddingRight: "4%" }}>
            <h2 className="mt-5 mb-6">Welcome to DashBoard. Agrim!</h2>
            <div className="columns mb-5">
                <div className="column is-one-fifth">Password:</div>
                <div className="column is-three-fifth">
                    <div>******<span className="button is-primary is-small ml-5"><i class="fa fa-pencil-square-o"></i></span></div>
                </div>
            </div>
            <hr style={{ backgroundColor: "rgb(200,200,200)", height: "1px" }} />
            <div className="columns mb-5">
                <div className="column is-one-fifth">Degrees:</div>
                <div className="column is-three-fifth">
                    <div className="mb-4 visible-parent is-flex">
                        <div>
                            <div>Higher Secondary School</div>
                            <div className="is-size-7">Graduated from NIST, 2017</div>
                        </div>
                        <button className="button is-danger is-small ml-3 visible-onhover-child">
                            <i class="fa fa-minus"></i>
                        </button>
                    </div>
                    <div className="mb-4 visible-parent is-flex">
                        <div>
                            <div>Bachelors in Computer Science and Information Technology (BSc.CSIT)</div>
                            <div className="is-size-7">Graduated from NCCS, 2022</div>
                        </div>
                        <button className="button is-danger is-small ml-3 visible-onhover-child">
                            <i class="fa fa-minus"></i>
                        </button>
                    </div>
                    <hr style={{ backgroundColor: "rgb(200,200,200)", height: "1px" }} />
                    <div className="has-text-primary-dark is-size-7 mb-2">Complete the form to enter your Degree here:</div>
                    <div className="columns is-multiline">
                        <div className="column is-2">Degree Name:</div>
                        <div className="column is-10">
                            <input type="text" className="input is-primary" placeholder="eg. Bachelors in Computer Engineering"/>
                        </div>
                        <div className="column is-2">Graduated From:</div>
                        <div className="column is-10">
                            <input type="text" className="input is-primary" placeholder="eg. Patan Engineering College" />
                        </div>
                        <div className="column is-2">Graduated Year:</div>
                        <div className="column is-8">
                            <input type="date" className="input is-primary" />
                        </div>
                        <div className="column is-2"><button className="button is-primary is-fullwidth">POST</button></div>
                    </div>
                </div>
            </div>
            <hr style={{ backgroundColor: "rgb(200,200,200)", height: "1px" }}/>
            <div className="columns mb-5">
                <div className="column is-one-fifth">Hobbies:</div>
                <div className="column is-two-fifth">
                    <div className="columns is-multiline">
                        <div className="column is-one-third visible-parent">
                            Football
                            <button className="button is-danger is-small ml-3 visible-onhover-child">
                                <i class="fa fa-minus"></i>
                            </button>
                        </div>
                        <div className="column is-one-third visible-parent">
                            Guitar
                            <button className="button is-danger is-small ml-3 visible-onhover-child">
                                <i class="fa fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="has-text-primary-dark is-size-7">Enter your Hobby Here:</div>
                    <div className="columns is-gapless">
                        <div className="column is-11">
                            <input type="text" className="input is-primary" placeholder="eg. Singing, Sketching, Reading"/>
                        </div>
                        <div className="column">
                            <button className="button is-primary"><i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;