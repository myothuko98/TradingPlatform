import { useEffect, useState } from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../common/header";
import { GetItemAction } from "../redux/actions/items/get-item";

const ItemList = ({ dispatch, itemListResponse }) => {

    
  const [itemList, setItemList] = useState([]);
  const navigate = useNavigate();
  const [sData, setSData] = useState("");
  useEffect(() => {
    dispatch(GetItemAction(null, null));
    itemListResponse.success = false;
  }, []);

  useEffect(() => {
    if (itemListResponse.success) {
      setItemList(itemListResponse.response);
    }
  }, [itemListResponse]);

  const handleSelectChange = (e) => {
    dispatch(GetItemAction(e.target.value, sData));
  };
  return (
    <>
      <Header />
      <Container className="outer-container">
        <Form.Select
          aria-label="Default select example"
          className="select-category"
          onChange={(e) => handleSelectChange(e)}
        >
          <option>Select Category</option>
          <option value="shirt">Shirt</option>
          <option value="shoe">Shoe</option>
        </Form.Select>
        <div className="right-container">
          <img src="../../images/filter.png" />
          <Form.Control
            type="text"
            id="searchInput"
            placeholder="Search ..."
            aria-describedby="searchInputBlock"
            value={sData}
            onChange={(e) => setSData(e.target.value)}
          />
          <Button variant="primary">Search</Button>
        </div>
      </Container>
      <Container className="item-container">
        {itemList.map((data) => (
          <Card style={{ width: "18rem", marginTop: "10px" }}>
            <Card.Img variant="top" src="../../images/test-shirt-1.jpg" />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>Color : {data.color}</Card.Text>
              <Card.Text>Size : {data.size}</Card.Text>
              <Card.Text>Price : {data.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/itemDetail", { state: { id: data.id } })
                }
              >
                Go detail
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};
export default connect((state) => ({
  itemListResponse: state.itemListResponse,
}))(ItemList);
