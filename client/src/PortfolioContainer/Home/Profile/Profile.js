import React from 'react';


import "./Profile.css";



export default function Profile(){
    return (
        <div className="profile-container">
            <div className="profile-parent">
                 <div className="profile-details"> 
                  <div className="colz">
                    <div className='colz-icon'>
                    <a href="https://www.facebook.com/mbalenhle.angel.5815/">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                   
                    <a href="https://www.instagram.com/mbalenhle_mdakane/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/palesa-mdakane-b85552212">
                        <i className="fa fa-linkedin-square"></i>
                    </a>

                   

                    </div>
                    
                   
                </div>
                
                
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello,I'm <span className="highlighted-text">Palesa Mdakane</span>
                    </span>
                </div>
               

                <div className="profile-options">
                    

                        <a href="Mdakane.pdf" download="Mdakane.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>

                        </a>
                    
                </div>
               
              </div> 
              <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
              </div>
            </div>
           

        </div>

    );
}