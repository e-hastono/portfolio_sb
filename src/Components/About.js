import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default class About extends Component {
    render() {
        return (            
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h2 className="mb-0">Emmanoel <span className="text-primary">Hastono</span></h2>
                    {/* <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · <a href="mailto:name@email.com">name@email.com</a> */}
                    <div className="subheading mb-5">
                        West Jakarta, Indonesia · <a href="tel:+6282257351669">+6282257351669</a> · <a href="mailto:e.p.hastono@gmail.com">e.p.hastono@gmail.com</a>
                    </div>
                    <p className="lead mb-5">
                        Supervisor IT Development at PT Bhanda Ghara Reksa (Persero), with 1+ years experience as backend developer. Currently pursuing Masters in Information Technology with interest in Blockchain and developing capabilities as full-stack programmer.
                    </p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/emmanoel-hastono-603906aa" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://github.com/e-hastono" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/e_hastono" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.facebook.com/e.hastono" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
