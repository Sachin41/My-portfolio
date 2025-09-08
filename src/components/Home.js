import { Element } from "react-scroll";
import photo from "../Images/photo.jpg"
export default function Home({name}) {
    return (
        <Element className="container" id="Home" name="Home">
            <div className="row pt-5">
                <div className="col-sm-7" data-aos="fade-right" data-aos-once="false">
                    <div className="card  border-0 pt-lg-5">
                        <div className="card-body">
                            <h6 className="card-title pt-lg-5 text-success">Get Ready to Start Work</h6>
                            <h1 className="fw-bolder">I'm
                                <span className="text-success"> UI Developer</span><br />
                                <span>Sachin Kumar</span>
                            </h1>
                            <p className="card-text fs-5">Front-End Developer with 5.5 years of experience building responsive, user-centric web apps using React, Angular, and modern web technologies, with a focus on performance and seamless user experiences
                            </p>
                            {/* <Link to="/" className="btn btn-success">Learn More</Link> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-5" data-aos="fade-left" data-aos-once="false">
                    <div className="card border-0 pt-lg-5">
                        <div className="card-body">
                            <img src={photo} alt="SK" className="img-fluted rounded-3" width="100%" height="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}