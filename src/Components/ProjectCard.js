import { Col } from "react-bootstrap";
import github from "../assets/img/Github-icon.svg";


export const ProjectCard = ({ title, description, imgUrl,githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="github-icon" style={{ marginTop: '10px', width: '40px', alignItems:'center' }} />
            </a>
        </div>
      </div>
    </Col>
  )
}