import React, { Component } from 'react';
import "./login.component.css";
import { Container,Form, Button,Spinner} from 'react-bootstrap';
import SimpleReactValidator from "simple-react-validator";
import { connect } from 'react-redux';
import { Userlogin, LoggedInUser, Userlogout } from '../../redux/action/user/user.action';
import Login from '../../pages/login/login';
class Logincomponent extends Component {
    constructor(props) {
        super(props);
        this.props.Userlogout();
        this.validator = new SimpleReactValidator({ autoForceUpdate: this });     
        this.state = {
                EmailId: "",
            Password: ""
        };
    };
    stateLogin = (e) => {
        e.preventDefault();
        this.setState({ EmailId: e.target.value });
    };
    statePassword = (e) => {
        e.preventDefault();
        this.setState({Password: e.target.value });
    };
    handleFormSubmit = () => {
        if (this.validator.allValid()) {
            let data = {
                    EmailId: this.state.EmailId,
                    Password: this.state.Password
            };
            console.log(data);  
            this.props.Userlogin(data);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    };
    render() {

        return (
            <React.Fragment>
                <Container>
                    {this.props.error ? this.props.error.message : null}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            name="email"
                            value={this.state.EmailId}
                            onChange={this.stateLogin}
                        />
                        <Form.Text className="text-muted">
                            {this.validator.message('email', this.state.EmailId, "required|email")}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            name="password"
                            value={this.state.Password}
                            onChange={this.statePassword}
                        />
                        <Form.Text className="text-muted">
                            {this.validator.message('password', this.state.Password, "required")}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit"
                        onClick={this.handleFormSubmit}
                    >
                        Submit
                </Button> { this.props.data.loggedIn ? <Spinner/> : null}
                </Container>
                

            </React.Fragment>
                
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state.login.logginerror);
    return {
        data: state.login,
        error: state.login.logginerror
    };
};


export default connect(mapStateToProps, { Userlogin, Userlogout})(Logincomponent);
