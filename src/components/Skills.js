import React from 'react'

export default function Skills() {
    return (
        <div className='container' id='Skills'>
            <div className='row'>
                <div className='col-sm-6'>
                    <h5 className="text-success">Qualification</h5>
                    <h3 className="fw-bold">Education</h3>
                    <div className='pt-3'>
                        <label className="text-success fs-6">2014-2017</label>
                        <h5 className="fw-bold">Master in Computer Applications</h5>
                        <h6 className="fw-normal">Hyderabad Central University</h6>
                        <p className='fw-light'>Secured CGPA: 6.2</p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <h5 className="text-success">Expert</h5>
                    <h3 className="fw-bold">My Skills</h3>
                    <div className='d-flex justify-content-between pt-3 fs-6 fw-bolder'><label>UI</label><label>75%</label></div>
                    <div className="progress" style={{ height: 10 }}>
                        <div className="progress-bar bg-success" style={{ width: '75%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='d-flex justify-content-between pt-3 fs-6 fw-bolder'><label>React</label><label>70%</label></div>
                    <div className="progress" style={{ height: 10 }}>
                        <div className="progress-bar bg-success" style={{ width: '70%' }} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
