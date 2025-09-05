import { Link, Element } from "react-scroll";
import photo from "../Images/photo.jpg"
export default function Home({name}) {
    return (
        <Element className="container" id="Home" name="Home">
            <div className="row">
                <div className="col-sm-7" data-aos="fade-up">
                    <div className="card  border-0 pt-lg-5">
                        <div className="card-body pt-lg-5">
                            <h6 className="card-title pt-lg-5 text-success">Get Ready to Start Work</h6>
                            <h1 className="fw-bolder">I'm
                                <span className="text-success"> Developer</span><br />
                                <span>Sachin Kumar</span>
                            </h1>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content. 
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                            <Link to="/" className="btn btn-success">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5" data-aos="fade-up">
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