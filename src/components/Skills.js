import React from 'react';
import { Element } from "react-scroll";

export default function Skills() {

    const skills = [
        {
            category: "Frontend",
            list: [
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "JavaScript (ES6+)", level: 80 },
                { name: "TypeScript", level: 70 },
                { name: "React.js", level: 65 },
                { name: "Angular", level: 70 },
                { name: "Bootstrap", level: 85 }
            ]
        },
        {
            category: "Tools",
            list: [
                { name: "Git & GitHub", level: 85 },
                { name: "VS Code", level: 90 },
                { name: "Postman", level: 70 },
                { name: "Zira ticketing system", level: 80 }
            ],
        },
        {
            category: "Other Skills",
            list: [
                { name: "Responsive Design", level: 90 },
                { name: "Cross-browser Compatibility", level: 85 },
                { name: "Performance Optimization", level: 75 },
                { name: "Agile/Scrum", level: 70 },
            ],
        },
    ];

    return (
        <Element className='container' id='Skills'>
            <div className="px-3">
                <h5 className="text-success text-center">Expert</h5>
                <h3 className="fw-bold text-center">Key Skills</h3>
                {skills.map((skill, ind) => {
                    return (<div className='row' key={ind} data-aos="zoom-in-down" data-aos-once="false">
                        <div className='col-sm-12'> <h5 className='fw-bold pt-4'>{skill.category}</h5></div>
                        {skill.list.map((item, i) => {
                            return (<div key={i} className='col-sm-6 pb-1'>
                                <div className='d-flex justify-content-between fsize-15'><label>{item.name}</label><label>{item.level}%</label></div>
                                <div className="progress" style={{ height: 10 }}>
                                    <div className="progress-bar bg-success" style={{ width: item.level + '%' }} role="progressbar" aria-valuenow={item.level} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>)
                        })}
                    </div>)
                })
                }
            </div>
        </Element>
    )
}
