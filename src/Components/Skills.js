import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,
         faCss3Alt,
         faJsSquare,
         faPhp,
         faPython,
         faLaravel,
         faReact,                  
         faNpm } from '@fortawesome/free-brands-svg-icons'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default class Skills extends Component {
    constructor() {
        super()

        this.state = {
            skills: [
                faHtml5,
                faCss3Alt,
                faJsSquare,
                faPhp,
                faPython,
                faLaravel,
                faReact,                  
                faNpm
            ]
        }
    }

    render() {
        var skills = this.state.skills.map(skill => {
            return (
                <li class="list-inline-item">
                    <FontAwesomeIcon icon={skill} />
                </li>
            )
        })

        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div class="w-100">
                    <h2 class="mb-5">Skills</h2>

                    <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul class="list-inline dev-icons">
                        {skills}
                    </ul>

                    {/* <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="fa-li fa"/>
                            Mobile-First, Responsive Design</li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="fa-li fa"/>
                            Cross Browser Testing &amp; Debugging</li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="fa-li fa"/>
                            Cross Functional Teams</li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className="fa-li fa"/>
                            Agile Development &amp; Scrum</li>
                    </ul> */}
                </div>
            </section>
        )
    }
}
