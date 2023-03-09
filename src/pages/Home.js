import { Fragment } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import classes from "./Home.module.css";

const DUMMY_LIST = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    place: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    city: "TORONTO,ON",
    place: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    place: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    place: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    place: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    place: "CONCORD PAVILION",
  },
];

const Home = () => {
  const tourList = DUMMY_LIST.map((tour) => {
    return (
      <ListGroupItem key={Math.random()} className="ms-5">
        <span>{tour.date}</span>
        <span>{tour.city}</span>
        <span>{tour.place}</span>
        <Button>BUY TICKETS</Button>
      </ListGroupItem>
    );
  });

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
          {tourList}
        </ListGroup>
      </Container>
    </Fragment>
  );
};

export default Home;
