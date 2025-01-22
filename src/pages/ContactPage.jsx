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

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })

        if (value.trim() !== "") {
            setErrors((prev) => ({...prev, [name]: ""}));
        } 
    };

    const handleBlur = (e) => {
        const {name, value} = e.target;
        if (value.trim() === "") {
            setErrors({
                ...errors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
            })
        } else if (name === "email" && !validateEmail(value)) {
            setErrors((prev) => ({...prev, email: "Please enter a valid email address"}));
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

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
        <div className = 'container bg-gradient p-5 mb-3'>
            <h2 className="text-white">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.name ? <p className="text-white">{errors.name}</p> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.email ? <p className="text-white">{errors.email}</p>: null}
                </div>
                <div className = "mb-3">
                    <label htmlFor="message" className="form-label text-white">Message</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rowns="5"
                        required
                    ></textarea>
                    {errors.message ? <p className="text-white">{errors.message}</p> : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {successMessage ? <div className="mt-3 text-white">{successMessage}</div> : null}
        </div>
    )
}