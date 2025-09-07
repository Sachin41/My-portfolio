import { Element } from "react-scroll";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false); // ✅ spinner state

    const publicKey = 'iPPRoElnXZtG-QEYf';
    const serviceId = 'service_pi4felw';
    const templateId = 'template_ixcz2oa';

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true); // start loading

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: "SKumar",
            to_email: "sachinhex41@gmail.com"
        }

        emailjs
            .send(serviceId, templateId, templateParams, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!', templateParams);
                    toast.success("Message sent successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "colored",
                    });

                    // reset fields
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    setIsSending(false); // stop loading
                },
                (error) => {
                    toast.error("Failed to send message. Try again!", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "colored",
                    });
                    console.error("FAILED...", error.text);
                    setIsSending(false); // stop loading
                },
            );
    };
    let contactInfo = [
        { icon: FaEnvelope, title: 'Email', info: 'sachinhex41@gmail.com' },
        { icon: FaPhoneAlt, title: 'Phone', info: '+91-8077733416' },
        { icon: FaMapMarkerAlt, title: 'location', info: 'Meerut, UP' }
    ];
    return (
        <Element className="container mt-5" id="Contact" name="Contact">
            <h5 className="text-success text-center">Get in touch</h5>
            <h3 className="text-center fw-bold">Let's work together</h3>
            <h6 className="text-center text-secondary">Have a project in mind ? I'd love to hear about it. Let's discuss how we can <br />bring your ideas to life</h6>
            <div className="row my-4">
                {/* Contact Information  */}
                <div className="col-sm-6" data-aos="fade-right" data-aos-once="false">
                    <h4 className="mb-3">Contact Information</h4>
                    <p className="fsize-15 mb-3">I'm always intrested in new opportunity and exiciting projects. Whether you have and question or just want to say hi, i will try my best to get back to you! </p>
                    {contactInfo.map((contact, ind) => {
                        return (

                            <div key={ind} className="alert alert-success d-flex align-items-center" role="alert">
                                <contact.icon className="me-3 fs-3" />
                                <div>
                                    <h5 className="mb-0">{contact.title}</h5>
                                    <p className="fsize-15 mb-0">{contact.info} </p>
                                </div>
                            </div>
                        );
                    })
                    }
                    <h6 className="mt-4">Follow me</h6>
                    <div className="d-flex align-items-start  fs-5 follow-icon">
                        <a href="https://github.com/Sachin41" className="me-2 github" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://leetcode.com/u/fXM6Z0W1Sl/" className="me-1" target="_blank" rel="noopener noreferrer" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                role="img"
                                aria-label="LeetCode Logo"
                            >
                                {/* Orange part */}
                                <path
                                    fill="#FFA116"
                                    d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"
                                />
                                {/* Black part */}
                                <path
                                    fill="#000000"
                                    d="M10.617 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Contact form  */}
                <div className="col-sm-6 ps-lg-4" data-aos="fade-left" data-aos-once="false">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title mb-3">Send Message</h4>

                            <form onSubmit={sendEmail} className="row g-3">
                                <div className="col-md-6 pe-lg-4">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="your name" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="your@email.com" required />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Subject</label>
                                    <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" placeholder="Project discussion" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="msg" className="form-label">Message</label>
                                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" id="msg" rows="4" placeholder="tell me about your project.."></textarea>
                                </div>
                                <div className="col-md-12 d-grid submitBtn">
                                    <button
                                        type="submit"
                                        id="sendMsg"
                                        className="btn btn-success mb-3 d-flex justify-content-center align-items-center"
                                        disabled={isSending} // disable button while sending
                                    >
                                        {isSending ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <FaPaperPlane className="ms-1 send-icon" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                            {/* ✅ Toast container */}
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}