import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import car from "../assets/img/Car.jpg";
import clothingstore from "../assets/img/clothing-store.jpg";
import garage from "../assets/img/garage.jpeg";
import tourism from "../assets/img/tourism.jpeg";
import task from "../assets/img/task.png";
import sepora from "../assets/img/sepora.jpeg"


export const Projects = () => {

  const projects = [
    {
      title: "Car Rental System",
      description: "Web Development",
      imgUrl: car,
      githubUrl: "https://github.com/your-username/car-rental-system",
      
    },
    {
      title: "Online Clothing Store",
      description: "Web Development",
      imgUrl: clothingstore,
      githubUrl: "https://github.com/Rizmia/E-Commerce-Website",
    },
    {
      title: "Garage Management System",
      description: "Full Stack Development",
      imgUrl: garage,
      githubUrl: "https://github.com/Janith-01/Garage-Management-project",
    },
    {
      title: "Tourism Website",
      description: "Design & Development",
      imgUrl: tourism,
      githubUrl: "https://github.com/your-username/tourism-website",
    },
    {
      title: "Task Management App ",
      description: "Android Development",
      imgUrl: task,
      githubUrl: "https://github.com/Rizmia/taskManagementApp",
    },
    {
      title: "Redesign Website",
      description: "UI/UX Design",
      imgUrl: sepora,
      githubUrl: "https://www.figma.com/design/88K6Y5mrr3IHmwPu4VMI1f/Sephora-redesign-inteface?m=auto&t=N7R2EcGuIcI9cubM-6",
      
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}