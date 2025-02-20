import headshot from "../../assets/headshot.jpg";
import artHeadshot from "../../assets/artHeadshot.jpg";

import "../../styles/Contact.css";
import Button from "../Button";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted");
    };

    return (
        <div className="contact" id="contact">
            <h1 className="contact-title">Contact</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <Button className="contact-button" text="Send Message" />
            </form>
        </div>
    );
}

export default Contact;
