import photo from "../Images/photo.jpg";
import {Element} from "react-scroll";

export default function About({name}) {
    return (
        <Element className="container" id="About" name="About">
            <div className="row">
                <div className="col-sm-5" data-aos="fade-up">
                    <div className="card">
                        <div className="card-body p-1">
                            <img src={photo} alt="SK" className="img-fluid rounded-3" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-7" data-aos="fade-up">
                    <div className="card  border-0 ps-lg-5">
                        <div className="card-body ps-lg-5">
                            <h5 className="card-title text-success">About Us</h5>
                            <h1 className="fw-bolder"> Why hire me for your <br />next project ?
                            </h1>
                            <h5 className="card-title text-success">UI Developer</h5>
                            <p className="card-text pt-3">With supporting text below as a natural lead-in to additional content.

                                <br /> With supporting text below as a natural lead-in to additional content.
                            </p>
                            <div className="row pt-2">
                                <div className="col-sm-6">
                                    <div>
                                        <label className="fw-bold">Name</label>
                                        <p>Sachin Kumar</p>
                                    </div>
                                    <div>
                                        <label className="fw-bold">DOB</label>
                                        <p>18/03/1993</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div>
                                        <label className="fw-bold">Location</label>
                                        <p>Meerut, Uttar Pradesh</p>
                                    </div>
                                    <div>
                                        <label className="fw-bold">Email</label>
                                        <p>sachinhex41@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}