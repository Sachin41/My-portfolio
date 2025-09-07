import { FaBriefcase } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Element } from "react-scroll";

export default function Experience() {
    const experience = [
        {
            company: 'Encora Innovation lab Pvt. ltd',
            postion: 'Software Developer',
            period: 'Oct 2021 – Jun 2023',
            location: 'Hyderabad, India',
            description: 'Developed modern web applications using Angular15 and TypeScript . Debugged and optimized code for improved performance. Developed comprehensive unit tests using Jasmine and Jest to ensure code reliability and maintainability. Collaborated with UX designers via Figma to implement pixel-perfect UIs. Followed mobile-first design principles for responsive layouts.',
            technologies: ['Angular15', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
        },
        {
            company: 'Darwinbox Digital Solutions Pvt Ltd ',
            postion: 'Software Engineer ',
            period: 'Jan 2020 – Sep 2021',
            location: 'Hyderabad, India',
            description: 'Built responsive web layouts using Bootstrap and SASS. Integrated dynamic UI components using jQuery and AJAX. Collaborated with design teams to translate mockups into functional interfaces',
            technologies: ['jQuery', 'javascript', 'Sass', 'Bootstrap'],
        },
        {
            company: 'Ahex Technologies Pvt Ltd ',
            postion: 'Associate Software Engineer',
            period: 'May 2018 – Dec 2019',
            location: 'Hyderabad, India',
            description: 'Developed and maintained web interfaces for various client applications. Converted PSDs into high-quality, responsive HTML/CSS templates. Successfully completed over 7 front-end applications independently.',
            technologies: ['jQuery', 'Html', 'CSS', 'Bootstrap'],
        },
    ]
    return (
        <Element className="container" id="Experience" name="Experience">
            <h5 className="text-success text-center">All Company</h5>
            <h3 className="text-center fw-bold">Work Experience</h3>
            <h6 className="text-center text-secondary">My professional journey and experience that shaped my experties.</h6>

            <div className="timeline position-relative">
                {experience.map((item, ind) => {
                    return (<div className="row my-5" key={ind}>
                        {ind % 2 !== 0 && <div className="col-md-6"></div>}
                        <div className="col-md-6 position-relative" data-aos={ind % 2 === 0 ? "fade-right" : "fade-left"} data-aos-once="false">
                            <div className="timeline-content bg-white p-4 rounded-3 shadow">
                                <div className="fs-1  ">
                                    <FaBriefcase className="me-2 text-success float-start" />
                                </div>
                                <div>
                                    <h5 className="mb-0">{item.company}</h5>
                                    <h6 className="text-success">{item.postion} </h6>
                                </div>
                                <p className="mb-1 fsize-15"><span className="text-success"><FaCalendar className="fs-6 mb-2 me-1" />{item.period}</span> <span className="text-muted float-end"><FaMapMarkerAlt className="fs-6 mb-1 me-1" />{item.location}</span></p>

                                <p className="fsize-15">{item.description}</p>
                                <div className="badgeGroup">
                                    {item.technologies.map((tech, ind) => {
                                        return <span className="badge rounded-pill bg-success me-1" key={ind}>{tech}</span>
                                    })}
                                </div>
                            </div>
                            <span className="timeline-dot"></span>
                        </div>
                        {ind % 2 === 0 && <div className="col-md-6"></div>}
                    </div>)
                })}
            </div>
        </Element>)
}
