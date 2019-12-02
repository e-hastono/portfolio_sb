import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import profile from '../img/profile.jpg'
import { Link, animateScroll as scroll} from 'react-scroll';

export default class Sidebar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <Navbar expand="lg" bg="primary" className="navbar-dark" fixed="top" id="sideNav">
                <div className="navbar-brand" onClick={this.scrollToTop}>
                    <span className="d-block d-lg-none">Clarence Taylor</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="" />
                    </span>
                </div>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="mr-auto">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link"
                        >About</Link>
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >Experience</Link>
                        <Link
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >Education</Link>
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >Skills</Link>
                        <Link
                            activeClass="active"
                            to="interests"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >Interests</Link>
                        <Link
                            activeClass="active"
                            to="awards"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >Awards</Link>
                        {/* <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#interests">Interests</Nav.Link>
                        <Nav.Link href="#awards">Awards</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
