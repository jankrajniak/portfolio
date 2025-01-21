import { useState } from 'react';
// import * as EmailJs from 'emailjs'
// import dotenv from 'dotenv'
// dotenv.config();


export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ... formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form successfully submitted");
        setSuccessMessage("Your message has been sent successfully. I will get back to you as soon as possible.");

        // EmailJs.
        //     send(
        //         process.env.SERVICE_ID || '',
        //         process.env.TEMPLATE_ID || '',
        //         {
        //             from_name: formData.name,
        //             from_email: formData.email,
        //             message: formData.message,
        //         },
        //         process.env.PUBLIC_KEY || ''
        //     ).then (
        //         (response) => {
        //             console.log("SUCCESS", response.status, response.text);
        //             setSuccessMessage("Your message has been sent successfully. I will get back to you as soon as possible.");
        //             setFormData({
        //                 name: "",
        //                 email: "",
        //                 message: "",
        //             });
        //         },
        //         (error) => {
        //             console.log("FAILED", error);
        //             setSuccessMessage("Sorry, your message could not be sent. Please try again later.");
        //         }
        //     );
    };

    return (
        <div className = 'container'>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className = "mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rowns="5"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {<div className="alert alert-info mt-3">{successMessage}</div> ? successMessage : null}
        </div>
    )
}