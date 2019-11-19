import React, { Component } from 'react';
import { Container, Col, Row ,Table,Spinner,Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { removecartItem } from '../../redux/action/shop/shop.action';
class Cart extends Component {
    componentDidMount() { }
    RemoveCartItem = (item) => {
        console.log(item);
        this.props.removecartItem(item);
    };
    render() {
        if (!this.props.data) { return null; }
        if (this.props.loading) { return <Spinner animation="border" /> }
        return (
            <Container >
               
                <Row>
                    <Col md={8}>
                        {

                            this.props.data.items.length > 0 ? this.props.data.items.map(item => (
                                <React.Fragment key={item.data._id}>
                                      
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>EmailId</th>
                                    <th>Price </th>
                                    <th>quantity</th>
                                    <th>TotalPrice</th>
                                </tr>
                            </thead>
                               <tbody >
                              
                             
                                 
                                        <tr key={item.data._id}>
                                        <td>{item.data._id}</td>
                                            <td>{item.data.FirstName}</td>
                                            <td>{item.data.LastName}</td>
                                            <td>{item.data.EmailId}</td>
                                        <td>{item.data.price}</td>
                                                <td>
                                                    <i class="fa fa-chevron-circle-left" aria-hidden="true"
                                                    onClick={() => item.quantity -= 1}
                                                    ></i>
                                                    &nbsp;
                                                    {item.quantity}
                                                    &nbsp;
                                                    <i class="fa fa-chevron-circle-right" aria-hidden="true"
                                                     onClick={() => item.quantity += 1}
                                                    ></i>
                                        </td>
                                        <td>
                                           {item.data.price * item.quantity} 
                                        </td>
                                        <td>
                                            <Button type="button" className="btn btn-danger btn-md"
                                             onClick={() => this.RemoveCartItem(item.data)}
                                            >REMOVE</Button>
                                            </td>
                                        </tr>
                                   
                                        </tbody>
                                                                                  
                                   </Table>
                                   <Button type="button" className="btn btn-danger btn-md">Checkout</Button>
                                    
                                   </React.Fragment>
                                ))
                                
                                    :
                                        <h1>ADD TO CART FIRST</h1>
                                    
                                 
                            }
                      
                                
                    </Col>
                </Row>
               
            </Container>
        );
        }
         
    }
const mapStateToProps = (state) => {
    console.log(state);
    return { data: state.cart, loading: state.loading }
}
export default connect(mapStateToProps, {removecartItem})(Cart);