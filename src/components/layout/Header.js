import { Fragment } from "react";
import { Row } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <Row className={classes.header}>
        <h1>The Generics</h1>
      </Row>
    </Fragment>
  );
};

export default Header;
