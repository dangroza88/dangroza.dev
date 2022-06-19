
import "../contact/contact.css"
import mail from "../img/mail.png"
import location from "../img/location.png"
import phone from "../img/social-media.png"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import React, { useState } from 'react';

const Contact = () => {
    const formMod = useRef()


    const [value, setValue] = useState()

    const refresh = () => {
        setValue({});
    }
    // whyyy ????

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3kor203', 'template_3mn3loa', formMod.current, 'xtmnKNK8t2k-K2XHk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    // function refreshPage() {
    //     window.location.reload(false);
    //   }

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrap">
                <div className="contact1">
                    <h1 className="contact-title">Get in touch with me</h1>
                    <div className="contact-info">
                        <div className="contact-info-items">
                            <img src={phone} alt="" className="contact-icon" />
                            0742504643
                        </div>
                        <div className="contact-info-items">
                            <img src={mail} alt="" className="contact-icon" />
                            dangroza.dev@gmail.com
                        </div>
                        <div className="contact-info-items">
                            <img src={location} alt="" className="contact-icon" />
                            Cluj Napoca
                        </div>
                    </div>
                </div>
                <div className="contact2">
                    <p className="contact-desc">
                        <b>What`s you story ?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis aliquam quidem necessitatibus animi doloremque, ab quas blanditiis fugit, iure, minima quae nesciunt. Aliquam in porro culpa expedita delectus minima eius asperiores repudiandae rerum quod qui quisquam doloremque, earum aut magnam natus temporibus ea ducimus quasi iure accusamus officiis eveniet.
                    </p>
                    <form ref={formMod} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message"></textarea>
                        <button   >Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact