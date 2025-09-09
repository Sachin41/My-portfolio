import { Element } from "react-scroll";
import portfolio_project from "../Images/portfolio_project.jpg";
import e_commerce from "../Images/e-commerce.jpg";
import task_management from "../Images/task.jpg";
import { useState } from "react";
export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A responsive portfolio website showcasing modern design principles with smooth animations and optimized performance. Features include dashboard, About, Experience, Skills, Projects and Contact.',
            image: portfolio_project,
            technologies: ['React', 'JS', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        },
        {
            id: 2,
            title: ' GE Historian',
            description: 'GE Historian data management software, It is a powerful enterprise-wide data historian that collects, archives, and distributes tremendous volumes of production information at extremely high speeds',
            image: e_commerce,
            technologies: ['Angular16', 'TS', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        },
        {
            id: 3,
            title: 'Darwinbox - HR Software',
            description: 'A new-age, enterprise-ready, HCM platform that enable’s enterprises to automate day-to-day HR processes, simplifies human interactions, delivers actionable insights to build better workplaces.',
            image: task_management,
            technologies: ['Angular', 'JS', 'jQuery', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        },
        {
            id: 4,
            title: 'Demo Instagram App',
            description: 'Provide a platform for social network with features of user modules, my post , all post, favorites and following',
            image: task_management,
            technologies: ['Firebase', 'Angular6', 'JS', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        },
        {
            id: 5,
            title: 'Engageto',
            description: 'Engageto focuses in building and deploying solutions centered on website push notification for chrome, firefox and safari. It provides the ability to automatically send notifications to your customers to their web and mobile browser.',
            image: e_commerce,
            technologies: ['Angular', 'JS', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        },
        {
            id: 6,
            title: 'E-Commerce Platform',
            description: 'A modern e-comarce platform bullt with React, javascript, CSS and Bootstrap integration. Features include user authentication, product management, and secure payments.',
            image: e_commerce,
            technologies: ['React', 'JS', 'CSS', 'Bootstrap'],
            category: 'Web app',
            featured: 'true'
        },



    ];
    const visibleProject = showAll ? projects : projects.slice(0, 3);

    return (
        <Element className="container mt-4" id="Projects">
            <div className="px-3">
                <h5 className="text-success text-center">Portfolio</h5>
                <h3 className="text-center fw-bold">Featured Projects</h3>
                <h6 className="text-center text-secondary">Here are some of my recent projects that showcase my skills and experties</h6>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-lg-4 mt-2">
                    {visibleProject.map(item => {
                        return (
                            <div className="col-md-4" key={item.id} data-aos="zoom-in-down" data-aos-once="false">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-img-box">
                                        <img src={item.image} className="card-img-top" alt={item.title} />
                                    </div>
                                    <div className="card-body">
                                        <span className="badge bg-secondary mb-2">{item.category}</span>
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text mb-2">{item.description.substring(0, 100)} ...</p>
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
                <div className="text-center">
                    {!showAll ?
                        <button className="btn btn-success mt-2" onClick={() => setShowAll(!showAll)}>View All Projects</button>
                        : <button className="btn btn-secondary mt-2" onClick={() => setShowAll(!showAll)}>View Less</button>
                    }
                </div>
            </div>
        </Element>
    );
}