import { useRef, useContext, useState } from "react";
import "./Login.css";
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
        if (!isLogin) {
          setLogin(true);
        } else {
          authCtx.login(data.idToken, data.email);
          history.push("/store");
        }
      } else {
        throw new Error(data.error.message);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md-5 col-10 mx-auto">
          <div className="card mt-5">
            <h3 className="card-header">{isLogin ? "Log In" : "Sign Up"}</h3>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    placeholder="Email"
                    className="form-control"
                    ref={enteredEmail}
                    type="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    placeholder="Password"
                    className="form-control"
                    ref={enteredPassword}
                    type="Password"
                  />
                </div>
                <button className="btn btn-outline-primary" type="submit">
                  {isLogin ? "Log In" : "Sign Up"}
                </button>
              </form>
            </div>
          </div>
          {!isLoading && (
            <button
              className="btn btn-outline-secondary btn-sm mt-3"
              onClick={() => setLogin(!isLogin)}
            >
              {isLogin ? "Create new account" : "Log in existing account"}
            </button>
          )}
          {isLoading && <p>Sending Request...</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
