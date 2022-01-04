import { connect } from "react-redux";
import Header from "../common/header";
import { Form, Button, Container, FloatingLabel, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterAction } from "../redux/actions/user/register";
import { AddItemAction } from "../redux/actions/items/add-item";
const AddItem = ({ dispatch, addItemResponse }) => {
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    color: "",
    size: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const navigate = useNavigate();

  useEffect(() => {
    addItemResponse.success = false;
  }, []);

  useEffect(() => {
    if (addItemResponse.success) {
      navigate("/items");
    }
  }, [addItemResponse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.name !== "" &&
      state.price !== "" &&
      state.description !== "" &&
      state.color !== "" &&
      state.size !== "" &&
      state.category !== ""
    ) {
      dispatch(AddItemAction(state));
    }
  };

  return (
    <>
      <Header />
      <h3 className="centered-form">Add Items</h3>
      <Form
        className="centered-form"
        onSubmit={handleSubmit}
        style={{ marginTop: "50px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Item Name"
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
            label="Size"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter Size"
              size="sm"
              value={state.size}
              onChange={(e) => handleChange(e)}
              name="size"
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Color"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Color"
              size="sm"
              name="color"
              value={state.color}
              onChange={(e) => handleChange(e)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="price"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="price"
              size="sm"
              name="price"
              value={state.price}
              onChange={(e) => handleChange(e)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              size="sm"
              name="description"
              value={state.description}
              onChange={(e) => handleChange(e)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Category"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Category"
              size="sm"
              name="category"
              value={state.category}
              onChange={(e) => handleChange(e)}
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </>
  );
};
export default connect((state) => ({
  addItemResponse: state.addItemResponse,
}))(AddItem);
