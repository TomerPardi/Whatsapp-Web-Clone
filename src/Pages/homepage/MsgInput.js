import React from 'react';

const Msginput = () => {
    return (
        <div className="wrap-message">

            <div class="btn-group dropup">
                <button className="chat-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="bi bi-paperclip"></i>
                </button>

                <div class="dropdown-menu">
                    <div class="d-flex justify-content-around">
                        <button>
                            <i class="bi bi-card-image"></i>
                        </button>
                        <button>
                            <i class="bi bi-camera-reels"></i>
                        </button>
                        <button>
                            <i class="bi bi-mic"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="message">
                <input type="text" className="input-message" placeholder="Write a message here"></input>
            </div>
            <button className='chat-icons'>
                <i className="bi bi-arrow-up-right-circle"></i>
            </button>
        </div>
    );
}

export default Msginput;
