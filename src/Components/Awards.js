import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

export default class Awards extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
                <div className="w-100">
                    <h2 className="mb-5">Awards &amp; Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <FontAwesomeIcon icon={faTrophy} className="fa-li fa text-warning" />
                            Google Analytics Certified Developer
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTrophy} className="fa-li fa text-warning" />
                            Mobile Web Specialist - Google Certification
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTrophy} className="fa-li fa text-warning" />
                            1<sup>st</sup> Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
                        <li>
                            <FontAwesomeIcon icon={faTrophy} className="fa-li fa text-warning" />
                            1<sup>st</sup> Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTrophy} className="fa-li fa text-warning" />
                            2<sup>nd</sup> Place - University of Colorado Boulder - Emerging Tech Competition 2008
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTrophy} className="fa-li fa text-warning" />
                            1<sup>st</sup> Place - James Buchanan High School - Hackathon 2006
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTrophy} className="fa-li fa text-warning" />
                            3<sup>rd</sup> Place - James Buchanan High School - Hackathon 2005
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
