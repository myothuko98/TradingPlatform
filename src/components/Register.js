import { connect } from "react-redux";
import Header from "../common/header";
import { Form, Button, Container, FloatingLabel, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterAction } from "../redux/actions/user/register";
const Register = ({ dispatch, registerResponse }) => {
  const [state, setState] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const navigate = useNavigate();

  useEffect(() => {
    registerResponse.success = false;
  }, []);

  useEffect(() => {
    if (registerResponse.success) {
      navigate("/welcome");
    }
  }, [registerResponse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name !== "" && state.email !== "" && state.password !== "") {
      dispatch(RegisterAction(state));
    }
  };

  return (
    <>
      <Header />

      <Form className="centered-form" onSubmit={handleSubmit}>
        <div id="img-div">
          <Image roundedCircle src="../../logo192.png" />
        </div>

        <Form.Group className="mb-3" controlId="formBasicName">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter Name"
              size="sm"
              value={state.name}
              onChange={(e) => handleChange(e)}
              name="name"
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Enter email"
              size="sm"
              value={state.email}
              onChange={(e) => handleChange(e)}
              name="email"
            />
          </FloatingLabel>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
            <a href="/welcome">Already have account?</a>
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};
export default connect((state) => ({
  registerResponse: state.registerResponse,
}))(Register);
