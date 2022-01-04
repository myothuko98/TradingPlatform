import { connect } from "react-redux";
import Header from "../common/header";
import { Form, Button, Container, FloatingLabel, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { LoginAction } from "../redux/actions/user/login";
import { useNavigate } from "react-router-dom";
const Welcome = ({ dispatch, loginResponse }) => {
  const [state, setState] = useState({ name: "", password: "" });
  const [err, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loginResponse.success = false;
  }, []);

  useEffect(() => {
    if (loginResponse.success) {
      navigate("/items");
    }
  }, [loginResponse]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.name !== "" && state.password !== "") {
      setError("");
      dispatch(LoginAction(state));
    } else {
      setError("Please fill the fields correctly!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <Header />

      <Form className="centered-form" onSubmit={handleSubmit}>
        <div id="img-div">
          <Image roundedCircle src="../../logo192.png" />
        </div>

        <Form.Group className="mb-3" controlId="formBasuiName">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter name"
              size="sm"
              name="name"
              onChange={(e) => handleChange(e)}
              value={state.name}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              size="sm"
              name="password"
              value={state.password}
              onChange={(e) => handleChange(e)}
            />
          </FloatingLabel>
          <Form.Text>
            <a href="/forgot-password">Forgot Password?</a>
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        {err ? (
          <p className="err-msg">{err}</p>
        ) : loginResponse.message == "fail" ? (
          <p className="err-msg">Authentication Error</p>
        ) : null}
      </Form>
    </>
  );
};
export default connect((state) => ({
  loginResponse: state.loginResponse,
}))(Welcome);
