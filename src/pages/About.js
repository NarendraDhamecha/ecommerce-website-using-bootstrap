import { Col, Container } from "react-bootstrap";
import LoremIpsum from "react-lorem-ipsum";
import "./About.css";

const About = () => {
  return (
      <Container className="about">
        <header>
          <h1>About</h1>
        </header>
        <div className="col-6 mx-auto">
          <LoremIpsum p={1} />
        </div>
      </Container>
  );
};

export default About;
