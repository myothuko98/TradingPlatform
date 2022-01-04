import { connect } from "react-redux";
import Header from "../common/header";
import { Form, Button, Container, FloatingLabel, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RegisterAction } from "../redux/actions/user/register";
import { AddItemAction } from "../redux/actions/items/add-item";
import { ItemDetailAction } from "../redux/actions/items/item-detail";
const ItemDetail = ({ dispatch, itemDetailResponse }) => {
  const [itemDetail, setItemDetail] = useState({});

  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItemDetail({ ...itemDetail, [name]: value });
  };

  useEffect(() => {
    itemDetailResponse.success = false;
    dispatch(ItemDetailAction(location.state.id));
  }, []);

  useEffect(() => {
    if (itemDetailResponse.success) {
      setItemDetail(itemDetailResponse.response[0]);
    }
  }, [itemDetailResponse]);

  const handleSubmit = (e) => {};

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
              value={itemDetail.name}
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
              value={itemDetail.size}
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
              value={itemDetail.color}
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
              value={itemDetail.price}
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
              value={itemDetail.description}
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
              value={itemDetail.category}
              onChange={(e) => handleChange(e)}
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add To Cart
        </Button>
      </Form>
    </>
  );
};
export default connect((state) => ({
  itemDetailResponse: state.itemDetailResponse,
}))(ItemDetail);
