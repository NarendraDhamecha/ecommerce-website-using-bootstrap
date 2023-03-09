import { useRef } from "react";
import classes from "./ContactUs.module.css";

const {
  Form,
  FormLabel,
  FormControl,
  FormGroup,
  Container,
  Button,
} = require("react-bootstrap");

const ContactUs = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const mobileNoRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const userDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      mobile_no: mobileNoRef.current.value,
    };

    try {
      const response = await fetch(
        "https://ecommerce-website-8dfa0-default-rtdb.firebaseio.com/userDetails.json",
        {
          method: "POST",
          body: JSON.stringify(userDetails),
          headers: {
            "content-type": "user-details-app",
          },
        }
      );

      if (response.ok) {
        alert("Your details submited successfully");
      } else {
        throw new Error("Details not submited please try again");
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Container className={classes.form}>
      <header className={classes.header}>
        <h2>
          Please fill in the form below and we will contact you very soon.
        </h2>
      </header>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3">
          <FormLabel>Name</FormLabel>
          <FormControl ref={nameRef} type="text" placeholder="enter name" />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Email</FormLabel>
          <FormControl ref={emailRef} type="email" placeholder="enter email" />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Mobile Number</FormLabel>
          <FormControl
            ref={mobileNoRef}
            type="number"
            placeholder="enter mobile number"
          />
        </FormGroup>
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
