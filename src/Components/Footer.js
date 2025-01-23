
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/Git-image.png";
import medium from "../assets/img/Medium-Blog.svg";


export const Footer = () => {
  return (
    <footer className="footer" style={{marginTop:'20px'}}>
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo"  style={{marginTop:"10px"}} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end"  style={{marginTop:"20px"}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rizmia-mansoor-12489128b"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Rizmia"> <img src={github} alt="Icon"></img></a>
              <a href="https://medium.com/@rizmiamansoor99"><img src={medium} alt="Icon" /></a>
            </div>
            <p>Rizmia Mansoor Copyright 2025. All Rights Reserved</p>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
