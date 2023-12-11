import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

import './Contact.css'
import mail from '../assets/Contact/mail.png'
import phone from '../assets/Contact/phone.png'


function Contact() {
  return (
   <>
   <Header />
    <div className="contact-bg">
       <div className="textarea">
        <h1>Got Suggestions ? <br />
            We Here ya...</h1> 
            <div className="contact-details">
                <div className="email-fbi">
                    <img src={mail} alt="" style={{width:"50px", height:"30px"}}/>
                    <h2>hello@fbi.com</h2>
                </div>
                <div className="number-fbi">
                    <img src={phone} alt="" style={{width:"50px", height:"30px"}}/>
                    <h2>000000000000</h2>
                </div>
            </div>
       </div>


    </div>
   <Footer />
   </>
  )
}

export default Contact