import { useRef, useContext, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AuthContext from "../components/store/auth-contex";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    let url = null;

    setIsLoading(true);

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-qsWSw4MjfvBV9kwq1U08_yFf1IkVULk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-qsWSw4MjfvBV9kwq1U08_yFf1IkVULk";
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail.current.value,
          password: enteredPassword.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "content-type": "application-json",
        },
      });

      setIsLoading(false);

      const data = await res.json();
      if (res.ok) {
        authCtx.login(data.idToken);

        if (!isLogin) setLogin(true);
        else history.push("/store");
      } else {
        throw new Error(data.error.message);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Container className="text-center">
      <header className="mb-4 mt-4">
        <h3>{isLogin ? "Log In" : "Sign Up"}</h3>
      </header>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3">
          <FormLabel>Email</FormLabel>
          <FormControl ref={enteredEmail} type="email"></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Password</FormLabel>
          <FormControl ref={enteredPassword} type="password"></FormControl>
        </FormGroup>
        <Button className="mb-3" type="submit" variant="outline-primary">
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
      </Form>
      {!isLoading && (
        <Button
          size="sm"
          onClick={() => setLogin(!isLogin)}
          variant="outline-secondary"
        >
          {isLogin ? "Create new account" : "Log in existing account"}
        </Button>
      )}
      {isLoading && <p>Sending Request...</p>}
    </Container>
  );
};

export default Login;
