import { Col, Container } from "react-bootstrap";
import LoremIpsum from "react-lorem-ipsum";
import "./About.css";

const About = () => {
  return (
      <Container className="about">
        <header>
          <h1>About</h1>
        </header>
        <Col className="col-6 offset-3">
          <LoremIpsum p={1} />
        </Col>
      </Container>
  );
};

export default About;
