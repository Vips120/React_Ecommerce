import React, { Component } from "react";
import {Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { ShopData } from "../../redux/action/shop/shop.action";
import { LoggedInUser } from "../../redux/action/user/user.action";
import Shopproduct from '../../pages/shop/shop';
class Shop extends Component {;
  imgUrl = "https://picsum.photos/id/884/200/200";
  componentDidMount() {
    this.props.ShopData();
    this.props.LoggedInUser();
  }
  render() {
    if(this.props.items === null) {return null}
    if (this.props.loader.loading) { return <Spinner animation="border" />}
    if (this.props.items) {
      return (
        <React.Fragment>
          <Shopproduct imgUrl={this.imgUrl} product={this.props.items.data}/>
        </React.Fragment>
      );      
    } 
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    items: state.shopper,
    loader: state.shopper
  };
};
export default connect(
  mapStateToProps,
  { ShopData,LoggedInUser }
)(Shop);
