import React, { Component } from 'react'

export default class Education extends Component {
    constructor() {
        super()

        this.state = {
            educations: [
                {
                    school: "Universitas Bina Nusantara",
                    degree: "Master of Information Technology",
                    program: "Master of Information Technology",
                    gpa: "-",
                    period: "June 2019 - December 2020 (expected)"
                },
                {
                    school: "Universitas Gadjah Mada",
                    degree: "Bachelor of Computer (Sarjana Komputer)",
                    program: "Computer Science - International Undergraduate Programme",
                    gpa: "3.79",
                    period: "September 2014 - August 2018"
                },
                {
                    school: "St. Joseph's Institution International",
                    degree: "International Baccalaureate",
                    program: "International Baccalaureate",
                    gpa: "41 / 45",
                    period: "January 2012 - December 2013"
                },
            ]
        }
    }

    render() {
        var educations = this.state.educations.map(education => {
            return (
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">{education.school}</h3>
                        <div className="subheading mb-3">{education.degree}</div>
                        <div>{education.program}</div>
                        <p>GPA: {education.gpa}</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">{education.period}</span>
                    </div>
                </div>
            )
        })

        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="w-100">
                    <h2 className="mb-5">Education</h2>
                    {educations}                    
                </div>
            </section>
        )
    }
}
