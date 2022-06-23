import React,{useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreeHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollServive'
import Animations from '../../utilities/Animations'
import './ContactMe.css'



export default function AboutMe(props){
    let fadeInScreenHandler =(screen)=>{
        if (screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[message,setMessage] = useState("")
    const[banner,setBanner] = useState("")
    const[bool,setBool] = useState("false")

    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handleMessage = (e) =>{
        setMessage(e.target.value);
    }
   console.log(name);
  
   const submitForm = async(e) =>{
    e.preventDefault();
    try{
        let data ={
            name,
            email,
            message,
        }
        setBool(true)
        const res =await axios.post('/contact',data)
        if (name.length === 0 || email.length === 0 || message.length === 0){
            setBanner(res.data.msg)
            toast.error(res.data.msg)
            setBool(false)

        }else if(res.status=== 200){
            setBanner(res.data.msg)
            toast.success(res.data.msg)
            setBool(false)
        }
    }
    catch (error) {
        console.log(error)
    }
    
    
   }
    return(
        <div className='main-container fadeIn' id={props.id|| ''}>
            <ScreenHeading
            subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
            <div className='central-form'>
                <div className='col'>
               
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
            <div className='back-form'>
                <div className='img-back'>
                    <h4>Send your Email Here</h4>
                    <img src={imgBack} alt='img not found'/>



            </div>

            <form onSubmit ={submitForm}>
                <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type='text' onChange={handleName}
                    value={name}
                    />
                    <label htmlFor='email'>Email</label>
                    <input type='email'onChange={handleEmail}
                    value={email}/>

                    <label htmlFor='message'>Message</label>
                    <textarea type='text'onChange={handleMessage}
                    value={message}/>

                    <div className='send-btn'>

                        <button type='submit'>
                        send<i className='fa fa-paper-plane'/>
                       

                        </button>

                    </div>

                
            </form>

            </div>
            </div>


        </div>
    )
}
