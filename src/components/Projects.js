import { Link, Element } from "react-scroll";
import portfolio_project from "../Images/portfolio_project.jpg";
import e_commerce from "../Images/e-commerce.jpg";
import task_management from "../Images/task.jpg";
export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A modern e-comarce platform bullt with React, javascript, CSS and Bootstrap integration. Features include user authentication, product management, and secure payments.',
            image: e_commerce,
            technologies: ['React', 'javascript', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'Updated my Protfolio website bullt with React, javascript, CSS and Bootstrap integration Features include dashboard, About me, and Skills, Project, Experience and Contact.',
            image: portfolio_project,
            technologies: ['React', 'javascript', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        },
        {
            id: 3,
            title: 'Task Management',
            description: 'Updated my Protfolio website bullt with React, javascript, CSS and Bootstrap integration Features include dashboard, About me, and Skills, Project, Experience and Contact.',
            image: task_management,
            technologies: ['React', 'javascript', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        }
    ]
    return (
        <Element className="container mt-4" id="Projects">
            <div className="px-3">
                <h5 className="text-success text-center">Portfolio</h5>
                <h3 className="text-center fw-bold">Featured Projects</h3>
                <h6 className="text-center text-secondary">Here are some of my recent projects that showcase my skills and experties</h6>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-lg-4 mt-2">
                    {projects.map(item => {
                        return (
                            <div className="col-md-4" key={item.id} data-aos="zoom-in-down" data-aos-once="false">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-img-box">
                                        <img src={item.image} className="card-img-top" alt={item.title} />
                                    </div>
                                    <div className="card-body">
                                        <span className="badge bg-secondary mb-2">{item.category}</span>
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text mb-2">{item.description}</p>
                                        <div className="badgeGroup mb-3">
                                            {item.technologies.map((tech, ind) => {
                                                return <span className="badge rounded-pill bg-success me-1" key={ind}>{tech}</span>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
                <div className="text-center"><Link to="/" className="btn btn-success mt-2">View All Projects</Link></div>
            </div>
        </Element>
    );
}