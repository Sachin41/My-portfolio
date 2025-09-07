import {Element} from "react-scroll";

export default function About({name}) {
       const education = [
        {
            year: '2014-2017',
            title: 'Master in Computer Applications',
            institution: 'Hyderabad Central University'
        },
        {
            year: '2010-2013',
            title: 'Bachelor in Science',
            institution: 'CCS University Meerut'
        }
    ];
    return (
        <Element className="container" id="About" name="About">
            <div className="row">
                                <div className='col-sm-5' data-aos="fade-right" data-aos-once="false">
                    <h5 className="text-success pt-3">Qualification</h5>
                    <h3 className="fw-bold">Education</h3>
                    {education.map((item, ind) => {
                        return (<div className='pt-3' key={ind}>
                            <label className="text-success fs-6">{item.year}</label>
                            <h5 className="fw-bold">{item.title}</h5>
                            <h6 className="fw-normal">{item.institution}</h6>
                            {/* <p className='fw-light'>Secured CGPA: 6.2</p> */}
                        </div>);
                    })
                    }
                </div>
                <div className="col-sm-7" data-aos="fade-left" data-aos-once="false">
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