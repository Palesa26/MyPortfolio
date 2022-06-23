import React,{useEffect} from "react";
import ScreenHeading from "../../utilities/ScreeHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollServive";
import Animations from '../../utilities/Animations'
import "./AboutMe.css";



export default function AboutMe(props){
    let fadeInScreenHandler =(screen)=>{
        if (screen.fadeInScreen !== props.id)
    return
 Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANTS = {
        description:"I recently graduated from Vaal University of Technology.I complete a diploma in Infomartion Technology majoring in Development Software.I am keen to pursue a carrer in the digital world using my knowledge and skills.I am curious about how data works and its contributions in our everyday lives.",
        highlights:{
            bullets:[
                "This opportunity is really exciting for me as I will be able to nature the programming skills I have.",
                "I see the role as a way of developing my career in a a well-established company as SovTech.",
                "I feel I will succeed in the role because I am familiar with the standard system development lifecycle processes.",
                "I am eager to be part of a dynamic growing company.",
                "I have always been curious about the digital world,the creativeness and how it is changing our lives to the better.",
                



            ],
            heading:"Why I want to be a developer at SovTech"
        }
    }
    const renderHighlight = ()=>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className="highlight" key={i}>
                    <div className="highlight-blob">
                        <span>{value}</span>


                    </div>

                </div>
            ))
        )

    }
    return(

        <div className="about-me-container screen-container fadeIn" id={props.id || ""}>
            <div className="about-me-parent">
               <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className="about-me-card">
                    <div className="about-me-profile">

                    </div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span> </div>
                            {renderHighlight()}
                        </div>
                       <div className="about-me-options">

                        <a href="Mdakane.pdf" download="Mdakane.pdf">
                            
                           <button className="btn highlighted-btn">Get Resume</button>

</a>

</div>
</div>
</div>


</div>

</div>
);
}