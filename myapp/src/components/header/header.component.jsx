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
        <Header currentuser={this.props.data.currentUserData} />
      </React.Fragment>
    );
  }
};
const mapStateToProps = (state) => {
  return { data: state.login }

};
export default connect(mapStateToProps,{LoggedInUser})(Headercomponent);