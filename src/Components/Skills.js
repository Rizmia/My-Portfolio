// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import html from "../assets/img/HTML5.svg";
import css from "../assets/img/CSS3.svg";
import js from "../assets/img/icons8-js-480.svg";
import angular from "../assets/img/icons8-angularjs.svg";
import mongoDB from "../assets/img/icons8-mongodb-480.svg";
import react from "../assets/img/React.svg";
import node from "../assets/img/icons8-nodejs.svg";
import php from "../assets/img/PHP.svg";
import typescript from "../assets/img/TypeScript.svg";
import bootstrap from "../assets/img/Bootstrap.svg";
import kotlin from "../assets/img/Kotlin.svg";
import java from "../assets/img/Java.svg";
import python from "../assets/img/Python.svg";
import android from "../assets/img/Android Studio.svg";
import tailwind from "../assets/img/Tailwind CSS.svg";




export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Languages and Frameworks</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="" />
                                {/* <i class="fa-brands fa-html5 fa-xl" style={{color:' #4b0082'}}></i> */}
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={angular} alt="" />
                                <h5>Angular</h5>
                            </div>

                            <div className="item">
                                <img src={mongoDB} alt="" />
                                <h5>MongoDB</h5>
                            </div>

                            <div className="item">
                                <img src={react} alt="" />
                                <h5>React</h5>
                            </div>

                            <div className="item">
                                <img src={node} alt="" />
                                <h5>Node JS</h5>
                            </div>

                            <div className="item">
                                <img src={php} alt="" />
                                <h5>PHP</h5>
                            </div>

                            <div className="item">
                                <img src={typescript} alt="" />
                                <h5>Typescript</h5>
                            </div>

                            <div className="item">
                                <img src={bootstrap} alt="" />
                                <h5>Bootstrap</h5>
                            </div>

                            <div className="item">
                                <img src={tailwind} alt="" />
                                <h5>Tailwind CSS</h5>
                            </div>

                            <div className="item">
                                <img src={kotlin} alt="" />
                                <h5>Kotlin</h5>
                            </div>

                            <div className="item">
                                <img src={java} alt="" />
                                <h5>Java</h5>
                            </div>

                            <div className="item">
                                <img src={python} alt="" />
                                <h5>Python</h5>
                            </div>

                            <div className="item">
                                <img src={android} alt="" />
                                <h5>Andriod Studio</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}