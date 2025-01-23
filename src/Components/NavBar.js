import { useState, useEffect } from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from "../assets/img/Git-image.png";
import medium from "../assets/img/Medium-Blog.svg";
import resume from "../assets/CV/RizmiaCV.pdf";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rizmia-mansoor-12489128b">
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a href="https://github.com/Rizmia" >
                <img src={github} alt="GitHub " />
              </a>
              <a href="https://medium.com/@rizmiamansoor99">
                <img src={medium} alt="Medium" />
              </a>
            </div>
            <button className="vvd" >
              <span> <a
                                href={resume}
                                download="Rizmia_CV.pdf"
                                style={{ textDecoration: "none", color: "inherit" }}
                              >
                                Download CV
                              </a></span>
            </button>
          </span>

  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
