import { Col, Container } from "react-bootstrap";
import LoremIpsum from "react-lorem-ipsum";
import classes from "./About.module.css";

const About = () => {
  return (
    <Container className={classes.about}>
      <header>
        <h1>About</h1>
      </header>
      <Col className="col-6 offset-3">
        <LoremIpsum p={1} />
      </Col>
      <footer>
        <h2>The Generics</h2>
      </footer>
    </Container>
  );
};

export default About;
