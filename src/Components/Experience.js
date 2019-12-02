import React, { Component } from 'react'

export default class Experience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            experiences: [
                {
                    title: "Supervisor IT Development",
                    company: "PT Bhanda Ghara Reksa (Persero)",
                    description: "Collaborating within the IT division in developing various applications and systems to contribute to the company's vision of digitalised logistics and warehousing",
                    period: "July 2019 - Present"
                },
                {
                    title: "Backend Developer",
                    company: "PT Qareer Harapan Asia",
                    description: "Contributing mainly to the improvement of Jobs.id CodeIgniter/Laravel-powered backend technology, with also works on the frontend aspect and the Golang API microservices",
                    period: "November 2018 - July 2019"
                },
                {
                    title: "IT Support",
                    company: "PT Sumber Inti Pangan",
                    description: "Provide technical support for the main office of the food company in terms of troubleshooting devices such as printers, computers, and routers; English and Indonesian translations of documents from partner companies, organisations and goverments; and designing visual illustrations such as posters and labels",
                    period: "February 2018 - November 2019"
                },
            ]
        }
    }

    render() {
        var experiences = this.state.experiences.map(experience => {
            return (
                <div key={experience.title} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">{experience.title}</h3>
                        <div className="subheading mb-3">{experience.company}</div>
                        <p>{experience.description}</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">{experience.period}</span>
                    </div>
                </div>
            )
        })

        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>
                    {experiences}                    
                </div>
            </section>
        )
    }
}
