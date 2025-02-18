import { useState } from "react";
import emailjs from "@emailjs/browser";
import SocialButtons from "../SocialButtons/SocialButtons";
import LightMail from '../../imgs/mail.png';
import DarkMail from '../../imgs/mail-dark.png';
import "./Contact.css";

const Contact = ({activeStyle}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const templateParams = {
            email: formData.email,  // Matches {{email}} in the template (email-js)
            name: formData.name,    // Matches {{name}} in the template (email-js)
            message: formData.message  // Matches {{message}} in the template (email-js)
        };
    
        emailjs
            .send(
                "service_t2129bb", 
                "template_2bh5pqh", 
                templateParams, 
                "BFIzVOuHKS6J3Pwyj"
            )
            .then(
                (response) => {
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setStatus("Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                }
            );
    };
    

    return (
        <div className="contact" id="contact">
            <ul>
                <li>
                    <h3>Links</h3>
                    <SocialButtons activeStyle={activeStyle} />
                </li>
                <li>
                    <h3>Get in touch</h3>
                    <div class='row'>
                        <img src={activeStyle === 'dark' ? LightMail : DarkMail} alt='Mail Icon'/>
                        <p>noahdyarborough@gmail.com</p>
                    </div>
                    {/* <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Send Message</button>
                        {status && <p className="status-message">{status}</p>}
                    </form> */}
                </li>
            </ul>
        </div>
    );
};

export default Contact;
