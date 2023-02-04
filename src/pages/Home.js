import { Fragment } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>The Generics</h1>
        <button className={classes.latestAlbum}>Get Our Latest Album</button>
        <button className={classes.playBtn}>►</button>
      </header>
      <Container className="text-center">
        <h2 className={classes.tours}>Tours</h2>
        <ListGroup variant="flush" className={classes.list}>
          <ListGroupItem>
            <span>JUL16</span>
            <span>DETROIT, MI</span>
            <span>DTE ENERGY MUSIC THEATRE</span>
            <Button size="sm">BUY TICKETS</Button>
          </ListGroupItem>
          <ListGroupItem>
            <span>JUL19</span>
            <span>TORONTO,ON</span>
            <span>BUDWEISER STAGE</span>
            <Button size="sm">BUY TICKETS</Button>
          </ListGroupItem>
          <ListGroupItem>
            <span>JUL 22</span>
            <span>BRISTOW, VA</span>
            <span>JIGGY LUBE LIVE</span>
            <Button size="sm">BUY TICKETS</Button>
          </ListGroupItem>
          <ListGroupItem>
            <span>JUL 29</span>
            <span>PHOENIX, AZ</span>
            <span>AK-CHIN PAVILION</span>
            <Button size="sm">BUY TICKETS</Button>
          </ListGroupItem>
          <ListGroupItem>
            <span>AUG 2</span>
            <span>LAS VEGAS, NV</span>
            <span>T-MOBILE ARENA</span>
            <Button size="sm">BUY TICKETS</Button>
          </ListGroupItem>
          <ListGroupItem>
            <span>AUG 7</span>
            <span>CONCORD, CA</span>
            <span>CONCORD PAVILION</span>
            <Button size="sm">BUY TICKETS</Button>
          </ListGroupItem>
        </ListGroup>
      </Container>
      <footer className={classes.footer}>
        <h1>The Generics</h1>
      </footer>
    </Fragment>
  );
};

export default Home;
