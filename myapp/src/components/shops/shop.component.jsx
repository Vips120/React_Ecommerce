import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import ShopData from "../../redux/action/shop/shop.action";
class Shop extends Component {
  componentDidMount() {
    this.props.ShopData();
  }
  render() {
    if(!this.props.items) {return null}
    return (
      <Container>
        <Row>
           {
            this.props.items.map(data => (
              <Col md={4} key={data._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{data.FirstName}</Card.Title>
                  <Card.Text>
                     {data.LastName}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            )) 
          }
       
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.shopper);
  return { items: state.shopper };
};
export default connect(
  mapStateToProps,
  { ShopData }
)(Shop);
