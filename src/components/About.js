import { Element } from "react-scroll";

export default function About({ name }) {
    const overviewList = [
        'Front-End Developer with 5.5 years of experience in creating responsive, user-focused web applications.',
        'Proficient in HTML5, CSS3, JavaScript, jQuery, TypeScript, React.js, and Angular 15, with expertise in asynchronous request handling and AJAX.',
        'Skilled in building mobile-first, cross-browser compatible interfaces and collaborating with UX teams to deliver intuitive user experiences.',
        'Experienced in Agile workflows, unit testing, and front-end performance optimization.'
    ]
    const education = [
        {
            year: '2014-2017',
            title: 'Master in Computer Applications',
            institution: 'Hyderabad Central University',
            marks: "6.2 CGPA"
        },
        // {
        //     year: '2010-2013',
        //     title: 'Bachelor in Science',
        //     institution: 'CCS University Meerut',
        //     marks: "60.5%"
        // }
    ];
    return (
        <Element className="container mt-4" id="About" name="About">
            <h5 className="text-success text-center">All Details</h5>
            <h3 className="text-center fw-bold">About Us</h3>
            <div className="row">
                <div className="col-sm-6" data-aos="fade-right" data-aos-once="false">
                    <div className="card  border-0">
                        <div className="card-body">
                            <h1 className="fw-bolder"> Why hire me for your <br />next project ?
                            </h1>
                            <h5 className="card-title text-success">UI Developer</h5>
                            <ul className="list-group list-group-flush">
                                {overviewList.map((it, i) => {
                                    return (<li className="list-group-item px-0" key={i}>{it}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 pt-2' data-aos="fade-left" data-aos-once="false">
                    <div className="card  border-0">
                        <div className="card-body">
                            <h4 className="fw-bold">Personal Info</h4>
                            <div className="row pt-1">
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

                            <h4 className="fw-bold pt-3">Qualification</h4>
                            {education.map((item, ind) => {
                                return (<div className='pt-1' key={ind}>
                                    <label className="text-success fs-6">{item.year}</label>
                                    <h5 className="fw-bold">{item.title}</h5>
                                    <h6 className="fw-normal">{item.institution}</h6>
                                    <p className='fw-light'>Secured Marks: {item.marks}</p>
                                </div>);
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}