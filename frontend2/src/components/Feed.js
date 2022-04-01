import React from 'react';
import './Feed.css';

const Feed = () => {

    return (
        <div style={{ height: "200vh", width: "100%", boxSizing: "border-box", paddingLeft: "4%", paddingRight: "4%" }}>
            
            <div className="box mt-5">
                <div className="is-flex">
                    <div className="comment-icon">BK</div>
                    <div className="content mb-4 post-body">
                        <div className="is-size-7 has-text-grey-light">Bikash Kharek</div>
                        <div className="is-size-7 has-text-grey-light">12 Jan 2021, 10:22am</div>
                        <h3 className="my-2">Regular Meeting Postponed</h3>
                        <p>Due to unforseen circumstances, today's meeting has been postponed to tommorow. The meeting will take place at the regular time tomorrow. See you then. Have a good day.</p>
                    </div>
                </div>
                <div className="columns is-gapless lc-section p-1 mb-2 is-clickable">
                    <div className="column is-6">
                        <i class="fa fa-heart liked"></i> <span className="has-text-grey-light">2</span>
                        </div>
                    <div className="column is-6 has-text-grey-light">
                        <i class="fa fa-comment-o"></i> 0
                    </div>
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
            </div>

            <div className="box mt-5">

                <div className="is-flex">
                    <div className="comment-icon">AP</div>
                    <div className="content mb-4 post-body">
                        <div className="is-size-7 has-text-grey-light">Asmita Pandey</div>
                        <div className="is-size-7 has-text-grey-light">12 Jan 2021, 2:30pm</div>
                        <div className="mt-2">#Update 0: Just completed my first project 'Meditation App'. Please try it and provide me with feedback if any.</div>
                        <div className="update-post mt-2 p-3 is-clickable">
                            <h3 className="my-2">Meditation App <i class="fa fa-link" ></i></h3>
                            <p>
                                Relieve your stress and calm your mind with the help of this application. 
                                Play a relaxing song and start a timer to start your healing.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Feed;