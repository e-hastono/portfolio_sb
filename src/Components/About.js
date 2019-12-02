import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default class About extends Component {
    render() {
        return (            
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h2 className="mb-0">Emmanoel <span className="text-primary">Hastono</span></h2>
                    <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
                        <a href="mailto:name@email.com">name@email.com</a>
                    </div>
                    <p className="lead mb-5">
                        I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                    </p>
                    <div className="social-icons">
                        <a href="#linkedin">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#github">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
