import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./product.component.css";
import { Container, Row, Col, Card, Button,Spinner } from 'react-bootstrap';
import {ShopProductId,cartItem } from '../../redux/action/shop/shop.action';
class Product extends Component {
  constructor(props) {
    super(props);
  this.id  = this.props.match.params.id;
  }
  componentDidMount() {
    // let id = this.props.match.parmas.id;
     this.props.ShopProductId(this.id);
  };

  Addcart = (id) => {
    this.props.cartItem(id);
  }
    render() {
      if (!this.props.item) { return null; }
      if(this.props.loading.loading) {return <Spinner animation="border" />}
        return (
            <Container>
                <Row>
                    < Col md={6}>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
                    <Card.Title>{this.props.item.data.data.FirstName}</Card.Title>
                    <Card.Text>
                      {this.props.item.data.data.LastName}
    </Card.Text>
                                
                    <Button variant="primary"
                      onClick={() => this.Addcart(this.props.item.data.data._id)}
                    >Add To Cart</Button>
  </Card.Body>
</Card>

                    </Col>
                </Row>
       
</Container>
        )
    }
};
const mapStateToProps = state => {
  console.log(state.shopId);
  return {
    item: state.shopId,
    loading: state.shopId
  }
}
export default connect(mapStateToProps,{ShopProductId,cartItem})(Product);