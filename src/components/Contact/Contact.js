import { useState } from "react";
import emailjs from "@emailjs/browser";
import SocialButtons from "../SocialButtons/SocialButtons";
import LightMail from '../../imgs/mail.png';
import DarkMail from '../../imgs/mail-dark.png';
import copy from '../../imgs/copy.png';
import copyDark from '../../imgs/copy-dark.png';
import "./Contact.css";

const Contact = ({ activeStyle }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            email: formData.email,
            name: formData.name,
            message: formData.message,
        };

        emailjs
            .send("service_t2129bb", "template_2bh5pqh", templateParams, "BFIzVOuHKS6J3Pwyj")
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

    const email = "noahdyarborough@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Remove after 2s
        }).catch(err => console.error("Failed to copy email:", err));
    };

    return (
        <div className="contact" id="contact">
            <ul>
                <li>
                    <h3>Links</h3>
                    <SocialButtons activeStyle={activeStyle} />
                </li>
                <li>
                    <h3>Email</h3>
                    <div className="row">
                        <p onClick={handleCopy} className="copy-text">
                           
                            <span className="copy-btn">
                                <img src={activeStyle === 'dark' ? copy : copyDark} alt="copy icon" />
                            </span>
                            {email}
                        </p>
                    </div>
                </li>
            </ul>

            {/* Toast Notification */}
            {copied && <div className="toast show">Copied to clipboard!</div>}

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
        </div>
    );
};

export default Contact;
