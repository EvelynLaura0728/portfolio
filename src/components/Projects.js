import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mercari from "../assets/img/mercari.png";
import cripter from "../assets/img/cripter.png";
import medical from "../assets/img/medical.png";
import travel from "../assets/img/travel.png";
import ecommerce from "../assets/img/ecommerce.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "travel Guide",
      description: "All-inclusive Golf + Stay + Travel Tour Packages",
      imgUrl: travel,
      projLink: "https://garudagolfvacation.com/",
    },
    {
      title: "Diversify Your Wealth",
      description: "Diversify your investment portfolio and be in control ",
      imgUrl: cripter,
      projLink: "https://sami.holdings/",

    },
    {
      title: "EJADAH MEDICAL LLC",
      description: "Medical, Scientific, Chemicals, Laboratory & Hospital equipments",
      imgUrl: medical,
      projLink: "http://www.ejadah-med.com/",

    },
  ];

  const projects2 = [

    {
      title: "Mercari",
      description: "Geek out over things you love",
      imgUrl: mercari,
      projLink: "https://www.mercari.com/ ",

    },
    {
      title: "New Flavours",
      description: "#1 SMOKE & VAPE SHOP VANCOUVER, CANADA",
      imgUrl: ecommerce,
      projLink: "https://vapestersmokeshop.ca/",

    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I am always ready for some hands-on experience and building projects is a great way of gaining experience, I build some awesome website projects </p>
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
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
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
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
