import React, { Component } from "react";
import { connect } from 'react-redux';
import "./header.component.css";
import Header from "../../pages/header/header";
import { LoggedInUser} from '../../redux/action/user/user.action';
class Headercomponent extends Component {
  constructor(props) { super(props); }
  componentDidMount() { this.props.LoggedInUser();}
  render() {
    return (
      <React.Fragment>
        <Header currentuser={this.props.data.currentUserData} count={this.props.cartitemcount}/>
      </React.Fragment>
    );
  }
};
const mapStateToProps = (state) => {
  console.log(state.cart.items.length);
  return { data: state.login , cartitemcount:state.cart.items}

};
export default connect(mapStateToProps,{LoggedInUser})(Headercomponent);